
var zeros = {
  r: new ComplexNumber(1,0),
  g: new ComplexNumber(-0.5,(Math.sqrt(3)/2)),
  b: new ComplexNumber(-0.5,-(Math.sqrt(3)/2))
}

function setup() {
  createCanvas(500,500);
  colorMode(HSB, 100);
  noStroke()
  
  //let lastNumber = new ComplexNumber(1,0);
  //fill screen with pixels of certian color
  //let x = new ComplexNumber(0,0);
  for (let i = -250; i < 250; i++) {
    for (let j = -250; j < 250; j++) {
      let f = new Polynomal([1,0,0,-1]);
      let fp = new Polynomal(f.difr());
      let ap;
      let pa;
      let nxii = 0;
      let xn = new ComplexNumber(i/150,j/150);
      do {
        let y = f.evalulate(xn);
        let yp = fp.evalulate(xn);
        y.divide(yp);
        xn.subtraction(y);
        nxii++;
      } while (isGreaterThanNums(xn) == null && nxii < 10);
      let color = isGreaterThanNums(xn) || 100;
      
      fill(color,100,100);
      rect((i+250),(j+250),1,1);
      
    }
  }
}

var res = 0.01;

function isGreaterThanNums(c) {
  let st = new ComplexNumber(c.a,c.b);
  let nd = new ComplexNumber(c.a,c.b);
  let thd = new ComplexNumber(c.a,c.b);
  st.subtraction(zeros.r)
  nd.subtraction(zeros.g)
  thd.subtraction(zeros.b)

  if (st.mangnatude() <= res) {
    
    return 0;
  }
  if (nd.mangnatude() <= res) {
    return 33;
  }
  if (thd.mangnatude() <= res) {
    return 66;
  }
  return null;
}


function draw() {
  
}

//NOTES
//nply.difr(),100,100 is black-white gradient
