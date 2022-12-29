function main(){
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [
      0.4,0.15,0.325,   //titik A 0
      0.4,0.15,-0.325,   //titik B 1
      -0.4,0.15,-0.325,   //titik C 2
      -0.4,0.15,0.325,   //titik D 3
      0.4,-0.15,0.325,   //titik E 4
      0.4,-0.15,-0.325,   //titik F 5
      -0.4,-0.15,-0.325,   //titik G 6
      -0.4,-0.15,0.325    //titik H 7
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
      -0.4,0.15,0.325, -0.4,-0.15,-0.325, -0.4,-0.15,0.325    //3,6,7-DGH
  ];

  // var lines = [
  //   0
  // ]
  
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
  ];


  var indices = [
    0,1,2, 3,4,5,         //depan
    6,7,8, 9,10,11,       //belakang
    12,13,14, 15,16,17,   //atas
    18,19,20, 21,22,23,   //bawah
    24,25,26, 27,28,29,   //kiri
    30,31,32, 33,34,35    //kanan    
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
      [0.0, 0.0, 1.3],    //posisi kamera
      [0.0, 0.0, -2.0],   //kemana kamera menghadap
      [0.0, 1.0, 0.0]     //arah atas kamera
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
          glMatrix.mat4.rotate(modmatrix, modmatrix, tetha, [0.7, 0.7, 0.3]);
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