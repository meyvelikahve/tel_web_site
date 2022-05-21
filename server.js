// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');
// const express = require('express')

// const server = http.createServer(function(req, res) {
//     console.log(req.url, req.method)

//     res.setHeader('Content-Type', 'text/html')




//     // fs.read('./index.html', (err, data) => {
//     //     if (err) {
//     //         console.log(err)
//     //         res.end()
//     //     } else {
//     //         //res.write(data)
//     //         res.end(data)
//     //     }
//     // })

//     fs.readFile('index.html', 'utf8', (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end()
//         } else {
//             //res.write(data)
//             res.end(data)
//         }
//     });



// });

// server.listen(3000, 'localhost', () => {
//     console.log('3000 portu dinleniyor')
// });