function main(){
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [
    //cube
      0.4,0.15,0.325,   //titik A 0
      0.4,0.15,-0.325,   //titik B 1
      -0.4,0.15,-0.325,   //titik C 2
      -0.4,0.15,0.325,   //titik D 3
      0.4,-0.15,0.325,   //titik E 4
      0.4,-0.15,-0.325,   //titik F 5
      -0.4,-0.15,-0.325,   //titik G 6
      -0.4,-0.15,0.325,    //titik H 7

      //text-triangle
      0.24,0.151, 0.177, //titik triangle-1 8
      0.16,0.151, 0.177, //titik triangle-2 9
      0.2,0.151, 0.077, //titik triangle-3 10
      //text-J
      //cube 1
      0.14,0.151,0.177, //titik J1 11
      0.09,0.151,0.177, //titik J2 12
      0.09,0.151,-0.123, //titik J3 13
      0.14,0.151,-0.123, //titik J4 14
      //cube 2
      0.18,0.151,-0.073, //titik J5 15
      0.14,0.151,-0.073, //titik J6 16
      0.14,0.151,-0.123, //titik J7 17
      0.18,0.151,-0.123, //titik J8 18
      //cube 3
      0.23,0.151,0.0, //titik J9 19
      0.18,0.151,0.0, //tiitk J10 20
      0.18,0.151,-0.123, //titik J11 21
      0.23,0.151,-0.123, //titik J12 22
      //text-B
      //cube 1
      0.06,0.151,0.177, //titik B1 23
      0.02,0.151,0.177, //titik B2 24
      0.02,0.151,-0.123, //titik B3 25
      0.06,0.151,-0.123, //titik B4 26
      //cube 2
      -0.05,0.151,0.177, //titik B5 27
      -0.08,0.151,0.177, //titik B6 28
      -0.08,0.151,-0.123, //titik B7 29
      -0.05,0.151,-0.123, //titik B8 30
      //cube 3
      0.02,0.151,0.177, //titik B9 31
      -0.05,0.151,0.177, //titik B10 32
      -0.05,0.151,0.127, //titik B11 33
      0.02,0.151,0.127, //titik B12 34
      //cube 4
      0.02,0.151,0.057, //titik B13 35
      -0.05,0.151,0.057, //titik B14 36
      -0.05,0.151,0.007, //titik B15 37
      0.02,0.151,0.007, //titik B16 38
      //cube 5
      0.02,0.151,-0.073, //titik B17 39
      -0.05,0.151,-0.073, //titik B18 40
      -0.05,0.151,-0.123, //titik B19 41
      0.02,0.151,-0.123, //titik B20 42
      //text-L
      //cube 1
      -0.11,0.151,0.177, //titik L1 43
      -0.16,0.151,0.177, //titik L2 44
      -0.16,0.151,-0.123, //titik L3 45
      -0.11,0.151,-0.123, //titik L4 46
      //cube 2
      -0.16,0.151,-0.073, //titik L5 47
      -0.21,0.151,-0.073, //titik L6 48
      -0.21,0.151,-0.123, //titik L7 49
      -0.16,0.151,-0.123, //titik L8 50
      //cube 3
      -0.21,0.151,0.0, //titik L9 51
      -0.26,0.151,0.0, //titik L10 52
      -0.26,0.151,-0.123, //titik L11 53
      -0.21,0.151,-0.123, //titik L12 54
      //text-B-miring
      -0.08,0.152,0.177, //titik miring
      -0.06,0.152,0.177,
      -0.08,0.152,0.147,
      -0.08,0.152,-0.123, //titik miring
      -0.06,0.152,-0.123,
      -0.08,0.152,-0.103,
    ];

  var triangles = [
      0.4,0.15,0.325, 0.4,0.15,-0.325, -0.4,0.15,-0.325,      //0,1,2 ABC
      0.4,0.15,0.325, -0.4,0.15,-0.325, -0.4,0.15,0.325,      //0,2,3-ACD
      0.4,-0.15,0.325, 0.4,-0.15,-0.325, -0.4,-0.15,-0.325,   //4,5,6-EFG
      0.4,-0.15,0.325, -0.4,-0.15,-0.325, -0.4,-0.15,0.325,   //4,6,7-EGH
      0.4,0.15,0.325, -0.4,0.15,0.325, -0.4,-0.15,0.325,      //0,3,7-ADH
      0.4,0.15,0.325, 0.4,-0.15,0.325, -0.4,-0.15,0.325,      //0,4,7-AEH
      0.4,0.15,-0.325, -0.4,0.15,-0.325, -0.4,-0.15,-0.325,   //1,2,6-BCG
      0.4,0.15,-0.325, 0.4,-0.15,-0.325, -0.4,-0.15,-0.325,   //1,5,6-BFG
      0.4,0.15,0.325, 0.4,0.15,-0.325, 0.4,-0.15,-0.325,      //0,1,5-ABF
      0.4,0.15,0.325, 0.4,-0.15,0.325, 0.4,-0.15,-0.325,      //0,4,5-AEF
      -0.4,0.15,-0.325, -0.4,0.15,0.325, -0.4,-0.15,-0.325,   //2,3,6-CDG
      -0.4,0.15,0.325, -0.4,-0.15,-0.325, -0.4,-0.15,0.325,    //3,6,7-DGH

      //text
      //triangle
      0.24,0.151,0.177, 0.16,0.151,0.177, 0.2,0.151,0.077, //triangle-text
      //text-J
      0.14,0.151,0.177, 0.09,0.151,0.177, 0.09,0.151,-0.123, //11,12,13
      0.14,0.151,0.177, 0.09,0.151,-0.123, 0.14,0.151,-0.123, //11,13,14
      0.18,0.151,-0.073, 0.14,0.151,-0.073, 0.14,0.151,-0.123, //15,16,17
      0.18,0.151,-0.073, 0.14,0.151,-0.123, 0.18,0.151,-0.123, //15,17,18
      0.23,0.151,0.0, 0.18,0.151,0.0, 0.18,0.151,-0.123, //19,20,21
      0.23,0.151,0.0, 0.18,0.151,-0.123, 0.23,0.151,-0.123, //19,21,22
      //text-B
      0.06,0.151,0.177, 0.02,0.151,0.177, 0.02,0.151,-0.123, //23,24.25
      0.06,0.151,0.177, 0.02,0.151,-0.123, 0.06,0.151,-0.123, //23,25,26
      -0.05,0.151,0.177, -0.08,0.151,0.177, -0.08,0.151,-0.123, //27,28,29
      -0.05,0.151,0.177, -0.08,0.151,-0.123, -0.05,0.151,-0.123, //27,29,30
      0.02,0.151,0.177, -0.05,0.151,0.177, -0.05,0.151,0.127, //31,32,33
      0.02,0.151,0.177, -0.05,0.151,0.127, 0.02,0.151,0.127, //31,33,34
      0.02,0.151,0.057, -0.05,0.151,0.057, -0.05,0.151,0.007, //35,36,37
      0.02,0.151,0.057, -0.05,0.151,0.007, 0.02,0.151,0.007, //35,37,38
      0.02,0.151,-0.073, -0.05,0.151,-0.073, -0.05,0.151,-0.123, //39,40,41
      0.02,0.151,-0.073, -0.05,0.151,-0.123, 0.02,0.151,-0.123, //39,41,42
      //text-L
      -0.11,0.151,0.177, -0.16,0.151,0.177, -0.16,0.151,-0.123, //43,44,45
      -0.11,0.151,0.177, -0.16,0.151,-0.123, -0.11,0.151,-0.123, //43,45,46
      -0.16,0.151,-0.073, -0.21,0.151,-0.073, -0.21,0.151,-0.123, //47,48,49
      -0.16,0.151,-0.073, -0.21,0.151,-0.123, -0.16,0.151,-0.123, //47,49,50
      -0.21,0.151,0.0, -0.26,0.151,0.0, -0.26,0.151,-0.123, //51,52,53
      -0.21,0.151,0.0, -0.26,0.151,-0.123, -0.21,0.151,-0.123, //51,53,54
      //text-B-miring
      -0.09,0.152,0.177, -0.06,0.152,0.177, -0.09,0.152,0.147,
      -0.09,0.152,-0.123, -0.06,0.152,-0.123, -0.09,0.152,-0.093,
  ];
  
  var colors = [
      0.3,0.3,0.3, 0.3,0.3,0.3, 0.3,0.3,0.3,          //depan - gray
      0.3,0.3,0.3, 0.3,0.3,0.3, 0.3,0.3,0.3,          
      0.3,0.3,0.3, 0.3,0.3,0.3, 0.3,0.3,0.3,          //belakang - grey
      0.3,0.3,0.3, 0.3,0.3,0.3, 0.3,0.3,0.3,
      0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15,          //atas - black
      0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15,          
      0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15,          //bawah - black
      0.15,0.15,0.15, 0.15,0.15,0.15, 0.15,0.15,0.15,
      0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,0.2,          //kiri - grey
      0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,0.2,          
      0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,0.2,          //kanan - grey
      0.2,0.2,0.2, 0.2,0.2,0.2, 0.2,0.2,0.2,

      //text
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //triangle-text
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //j-cube1
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //j-cube2
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //j-cube3
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,

      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //b-cube1
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //b-cube2
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //b-cube3
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //b-cube4
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //b-cube5
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,

      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //l-cube1
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //l-cube2
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9, //l-cube3
      0.9,0.9,0.9, 0.9,0.9,0.9, 0.9,0.9,0.9,

      0.3,0.3,0.3, 0.3,0.3,0.3, 0.3,0.3,0.3,
      0.3,0.3,0.3, 0.3,0.3,0.3, 0.3,0.3,0.3,
  ];


  var indices = [
    //cube
    0,1,2, 3,4,5,         //depan
    6,7,8, 9,10,11,       //belakang
    12,13,14, 15,16,17,   //atas
    18,19,20, 21,22,23,   //bawah
    24,25,26, 27,28,29,   //kiri
    30,31,32, 33,34,35,    //kanan   
    36,37,38,

    //text
    39,40,41,
    42,43,44, 45,46,47, //j-cube1
    48,49,50, 51,52,53, //j-cube2
    54,55,56, 57,58,59, //j-cube3
    60,61,62, 63,64,65, //b-cube1
    66,67,68, 69,70,71, //b-cube2
    72,73,74, 75,76,77, //b-cube3
    78,79,80, 81,82,83, //b-cube4
    84,85,86, 87,88,89, //b-cube5
    90,91,92, 93,94,95, //l-cube1
    96,97,98, 99,100,101, //l-cube2
    102,103,104, 105,106,107, //l-cube3
    108,109,110, 111,112,113,
  ];

  // var indicesVertices = [
  //   0,1,2,  //ABC
  //   0,2,3,  //ACD
  //   4,5,6,  //EFG
  //   4,6,7,  //EGH
  //   0,3,7,  //ADH
  //   0,4,7,  //AEH
  //   1,2,6,  //BCG
  //   1,5,6,  //BFG
  //   0,1,5,  //ABF
  //   0,4,5,  //AEF
  //   2,3,6,  //CDG
  //   3,6,7   //DGH
  // ];

  //vertex buffer
  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangles), gl.STATIC_DRAW);
  
  //color buffer
  var colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  //index buffer
  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


  //mengambil dan menyimpan informasi vertex dari html dg document getElementById
  var vertexShaderCode = document.getElementById("vertexShaderCode").text;
  //membuat vertex shader
  var vertexShader = gl.createShader( gl.VERTEX_SHADER );
  gl.shaderSource(vertexShader, vertexShaderCode);
  gl.compileShader(vertexShader);

  //mengambil dan menyimpan informasi fragment dari html dg document getElementByID
  var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
  //membuat fragment shader
  var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
  gl.shaderSource(fragmentShader, fragmentShaderCode);
  gl.compileShader(fragmentShader);

  //menambahkan info shader ke package agar bisa dicompile
  var program = gl.createProgram();  
  gl.attachShader(program, vertexShader);   
  gl.attachShader(program, fragmentShader);   
  gl.linkProgram(program);
  gl.useProgram(program);

  //menambahkan vertices ke dalam aPosition dan aColor untuk digambar
  //position
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPosition = gl.getAttribLocation(program, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);

  //color
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  var aColor = gl.getAttribLocation(program, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(aColor);
  
  var Pmatrix = gl.getUniformLocation(program, "uProj");
  var Vmatrix = gl.getUniformLocation(program, "uView");
  var Mmatrix = gl.getUniformLocation(program, "uModel");
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  
  var projmatrix = glMatrix.mat4.create();
  glMatrix.mat4.perspective(
      projmatrix,
      glMatrix.glMatrix.toRadian(90),
      1.0,
      0.5,
      10.0
  );
  var modmatrix = glMatrix.mat4.create();
  var viewmatrix = glMatrix.mat4.create();
  glMatrix.mat4.lookAt(
      viewmatrix,
      [0.0, 0.0, 1.2],    //posisi kamera
      [0.0, 0.0, -2.0],   //kemana kamera menghadap
      [0.0, 0.1, 0.0]     //arah atas kamera
  );

  var freeze = false;
  function onMouseClick(event){
      if(freeze) freeze = false;
      else freeze = true;
  }
  document.addEventListener('click', onMouseClick, false);

  function onKeyDown(event){
      if(event.keyCode == 32) freeze = true;
  }
  function onKeyUp(event){
      if(event.keyCode == 32) freeze = false;
  }
  document.addEventListener('keydown', onKeyDown, false);
  document.addEventListener('keyup', onKeyUp, false);

  var tetha = glMatrix.glMatrix.toRadian(1);
  var animate = function(){
      if(!freeze){
          glMatrix.mat4.rotate(modmatrix, modmatrix, tetha, [0.0, 0.1, 0.1]);
      }
      
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);

      gl.clearColor(1.0, 1.0, 1.0, 1.0);
      gl.clearDepth(1.0);

      gl.viewport(0.0, 0.0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      gl.uniformMatrix4fv(Pmatrix, false, projmatrix);
      gl.uniformMatrix4fv(Vmatrix, false, viewmatrix);
      gl.uniformMatrix4fv(Mmatrix, false, modmatrix);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

      window.requestAnimationFrame(animate);
  }    
  animate(0);    
}