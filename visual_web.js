let table, table2, table3, table4, table5; // cada vez que ponemos un nuevo csv
let eje_x_1 = [100];
let eje_y_1 = [100];
let eje_z_1 = [100];

let eje_x_2 = [100];
let eje_y_2 = [100];
let eje_z_2 = [100];

let eje_x_3 = [100];
let eje_y_3 = [100];
let eje_z_3 = [100];

let eje_x_4 = [100];
let eje_y_4 = [100];
let eje_z_4 = [100];

let tiempomillis = 0;
let contador = 0;
let distancia_modelos = 800;

function preload() {
  table = loadTable('assets/natural_1.csv', 'csv', 'header');
  table2 = loadTable('assets/natural_2.csv', 'csv', 'header');
  table3 = loadTable('assets/natural_3.csv', 'csv', 'header');
  table4 = loadTable('assets/natural_4.csv', 'csv', 'header');
}


function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);


  //cycle through the table
  for (let r = 0; r < table.getRowCount(); r++)
  {
    eje_x_1[r]=table.getString(r, 2);
    eje_y_1[r]=table.getString(r, 3);
    eje_z_1[r]=table.getString(r, 4);
  }

  for (let r = 0; r < table.getRowCount(); r++)
  {
    eje_x_2[r]=table2.getString(r, 2);
    eje_y_2[r]=table2.getString(r, 3);
    eje_z_2[r]=table2.getString(r, 4);
  }

  for (let r = 0; r < table.getRowCount(); r++)
  {
    eje_x_3[r]=table3.getString(r, 2);
    eje_y_3[r]=table3.getString(r, 3);
    eje_z_3[r]=table3.getString(r, 4);
  }

  for (let r = 0; r < table.getRowCount(); r++)
  {
    eje_x_4[r]=table4.getString(r, 2);
    eje_y_4[r]=table4.getString(r, 3);
    eje_z_4[r]=table4.getString(r, 4);
  }
}


function draw() {
  background(80);

  //drag to move the world.
  orbitControl();
  // translate(width/2, height/2, 130);

  noFill();
  push();
  translate(0,0,-distancia_modelos);
  for (let i = 1; i < contador; i++)
  {
    stroke(255);
    point(eje_x_1[i], eje_y_1[i], eje_z_1[i]);
    line(eje_x_1[i-1], eje_y_1[i-1], eje_z_1[i-1], eje_x_1[i], eje_y_1[i], eje_z_1[i]);
  }
  stroke(0);
  box(300);
  pop();



  push();
  translate(-distancia_modelos,0,0);
  for (let i = 1; i < contador; i++)
  {
    stroke(255);
    point(eje_x_2[i], eje_y_2[i], eje_z_2[i]);
    line(eje_x_2[i-1], eje_y_2[i-1], eje_z_2[i-1], eje_x_4[i], eje_y_2[i], eje_z_2[i]);
  }
  stroke(0);
  box(300);
  pop();

  push();
  translate(distancia_modelos,0,0);

  for (let i = 1; i < contador; i++)
  {
    stroke(255);
    point(eje_x_3[i], eje_y_3[i], eje_z_3[i]);
    line(eje_x_3[i-1], eje_y_3[i-1], eje_z_3[i-1], eje_x_3[i], eje_y_3[i], eje_z_3[i]);
  }
  stroke(0);
  box(300);
  pop();

  push();
  translate(0,0,distancia_modelos);
  for (let i = 1; i < contador; i++)
  {
    stroke(255);
    point(eje_x_4[i], eje_y_4[i], eje_z_4[i]);
    line(eje_x_4[i-1], eje_y_4[i-1], eje_z_4[i-1], eje_x_4[i], eje_y_4[i], eje_z_4[i]);
  }
  stroke(0);
  box(300);
  pop();

if(millis() > tiempomillis)
{
  tiempomillis = millis() + 1000;
  contador++;
}

if(contador > table.getRowCount()
|| contador > table2.getRowCount()
||contador > table3.getRowCount()
||contador > table4.getRowCount())
{
  contador = 0;
}

}
