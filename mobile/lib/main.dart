import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Inventory order system',
      home: OrderPage(),
    );
  }
}

class OrderPage extends StatefulWidget {
  const OrderPage({super.key});

  @override
_OrderPageState createState() => _OrderPageState();
}

class _OrderPageState extends State<OrderPage> {
  final TextEditingController _productIdController = TextEditingController();
  final TextEditingController _quantityController = TextEditingController();
  String _message = '';

  Future<void> placeOrder() async {
    final prodId = _productIdController.text;
    final qty = int.tryParse(_quantityController.text) ?? 1;
    try{
      final data=await http.post(
        headers: {"Content-Type":"application/json"},
        Uri.parse('http://localhost:5000/order'),
      body:jsonEncode({"productId":prodId,'quantity':qty}));
       if(data.statusCode==200){
      setState(() {
        _message='order placed success';
      });
       }
       else{setState(() {
         _message="error: ${data.body}";
       });}
       
    }
    catch(e){
      setState(() {
      _message="error: $e";
      });
    }
   
    }
  

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: Text(' Order placement'),
      ),
      body: Padding(padding: EdgeInsets.all(17),

      child: Column(
        children: [
          TextField(
            controller:_productIdController ,
        decoration: InputDecoration(labelText: 'productId'),
          ),
          SizedBox(height: 20,),
          TextField(
            controller:_quantityController,
            decoration: InputDecoration(labelText: 'quantity'),
            keyboardType: TextInputType.number,
          ),
          SizedBox(height: 14),
          ElevatedButton(onPressed: placeOrder, child: Text('put Order')),
          SizedBox(height: 10,),
          Text(_message),
        ],
      ),
    ));
  }
}
