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

let millisegundos = millis();
let tiempomillis = 0;

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
  //background(80);

  //drag to move the world.
  orbitControl();
  // translate(width/2, height/2, 130);

  noFill();
  push();
  for (let i = 0; i < table.getRowCount(); i++)
  {
    stroke(255);
    point(eje_x_1[i], eje_y_1[i], eje_z_1[i]);
  }
  stroke(0);
  box(300);
  pop();



  push();
  translate(500,0,500);
  for (let i = 0; i < table2.getRowCount(); i++)
  {
    stroke(255);
    point(eje_x_2[i], eje_y_2[i], eje_z_2[i]);
  }
  stroke(0);
  box(300);
  pop();

  push();
  translate(-500,0,500);

  for (let i = 0; i < table3.getRowCount(); i++)
  {
    stroke(255);
    point(eje_x_3[i], eje_y_3[i], eje_z_3[i]);
  }
  stroke(0);
  box(300);
  pop();

  push();
  translate(0,0,1000);
  for (let i = 0; i < table4.getRowCount(); i++)
  {
    stroke(255);
    point(eje_x_4[i], eje_y_4[i], eje_z_4[i]);
  }
  stroke(0);
  box(300);
  pop();

if (millisegundos > tiempomillis)
{
  tiempomillis = millisegundos + 1000;
  background(150);
  print(tiempomillis);
}
else
{
    background(80);
}
}

}
