let table;
let eje_x_1 = [100];
let eje_y_1 = [100];
let eje_z_1 = [100];

function preload() {
  table = loadTable('assets/natural1.csv', 'csv', 'header');
}


function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);

  //count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  //["Goat", "Leopard", "Zebra"]

  //cycle through the table
  for (let r = 0; r < table.getRowCount(); r++)
  {
    eje_x_1[r]=table.getString(r, 2);
    eje_y_1[r]=table.getString(r, 3);
    eje_z_1[r]=table.getString(r, 4);
  }
}


function draw() {
  background(80);

  //drag to move the world.
  orbitControl();
  // translate(width/2, height/2, 130);

  for (let i = 0; i < table.getRowCount(); i++) {
    stroke(255);
    point(eje_x_1[i], eje_y_1[i], eje_z_1[i]);
  }
}
