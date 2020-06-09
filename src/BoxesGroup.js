import React from 'react';
import Box from './Box';
import './box.css';
import Table from "./Table";
class BoxesGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {



          newboard: [[1,17,5,2],[6,'+',1,'+',' ','=',8],['+',' ','+',' ','+'],[2,'+',' ','+',1,'=',20],['+',' ','*',' ','+ '],[2,'+',' ','+',' ','=',9],['=',' ','=',' ','='],[10,' ',35,' ',7]],
          answer:{
            r1:8,
            r2:20,
            r3:9,
            c1:10,
            c2:35,
            c3:7
          },

            r1:false,
            r2:false,
            r3:false,
            c1:false,
            c2:false,
            c3:false


        };
        this.updateTable = this.updateTable.bind(this);
        this.doOperations = this.doOperations.bind(this);
      }
      findRow(r,fboard){
        let row = [];
        for(let i=0;i<5;i++){
        row[i]=fboard[r][i];
        if(row[i]==' '){
              row[i]=0;
             }
          }
        return row;

      }
      findCol(c,fboard){
        let col = [];
        for(let i =0;i<6;i++){
           col[i]=fboard[i][c];
           if(col[i]==' '){
             col[i]=0;
           }
       }
       col.shift();
       return col;
      }
  doOperations(fboard){

  var r1 = this.findRow(1,fboard);
  var r2 = this.findRow(3,fboard);
  var r3 = this.findRow(5,fboard);
  var c1 = this.findCol(0,fboard);
  var c2 = this.findCol(2,fboard);
  var c3 = this.findCol(4,fboard);
  r1 = r1.join('');
  r2 = r2.join('');
  r3 = r3.join('');
  c1 = c1.join('');
  c2 = c2.join('');
  c3 = c3.join('');
  r1 = eval(r1);
  r2 = eval(r2);
  r3 = eval(r3);
  c1 = eval(c1);
  c2 = eval(c2);
  c3 = eval(c3);
  console.log("allvalues***"+r1,r2,r3,c1,c2,c3);
  console.log(this.state.r1);

    if(r1==this.state.answer.r1)this.setState({r1:true},()=>{console.log('done')});
    else this.setState({r1:false},()=>{console.log('done')});
    if(r2==this.state.answer.r2)this.setState({r2:true},()=>{console.log('done')});
    else this.setState({r2:false},()=>{console.log('done')});
    if(r3==this.state.answer.r3)this.setState({r3:true},()=>{console.log('done')});
    else this.setState({r3:false},()=>{console.log('done')});
    if(c1==this.state.answer.c1)this.setState({c1:true},()=>{console.log('done')});
    else this.setState({c1:false},()=>{console.log('done')});
    if(c2==this.state.answer.c2)this.setState({c2:true},()=>{console.log('done')});
    else this.setState({c2:false},()=>{console.log('done')});
    if(c3==this.state.answer.c3)this.setState({c3:true},()=>{console.log('done')});
    else this.setState({c3:false},()=>{console.log('done')});



    }


      swapBoxes = (fromBox, toBox) => {
        let operators = ['+','+','+','+','+','+','*','+','+','+','+','+'];
          console.log(fromBox,toBox);
          var table = document.getElementById('mytable');
          console.log(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='=')

          if(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!==' '&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='='&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='/'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='*'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='-'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='+'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='/'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='*'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='-'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='+'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='=')
          {

              var temp1  = table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML;
              table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML = table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML;
              table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML = temp1;

          }
          console.log(parseInt(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML)+parseInt(table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML))

          this.updateTable(toBox);

          if(toBox.row=='1'||toBox.row=='3'||toBox.row=='5'){

            let x = parseInt( table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML );
            console.log('row is'+toBox.row);

          }


      }

      updateTable(toBox){
        let fboard = [];
        var table = document.getElementById('mytable');
        for( var i=0; i<table.rows.length; i++ ) {
          fboard.push( [] );
        }
        for (var r = 0, n = table.rows.length; r < n; r++) {
            for (var c = fboard[r].length, m = table.rows[r].cells.length; c < m; c++) {
                fboard[r].push(table.rows[r].cells[c].childNodes[0].innerHTML);
            }
        }
        console.log(fboard)
      this.setState({
       newboard:fboard
      },()=>{
       console.log(fboard)
     });
this.doOperations(fboard);
}




    handleDragStart = data => event => {

      let fromBox = JSON.stringify({ row: data.row, col: data.col });

      event.dataTransfer.setData("dragContent", fromBox);
    };

    handleDragOver = data => event => {

      event.preventDefault();
      return false;
    };

    handleDrop = data => event => {
       // console.log(data)
      event.preventDefault();
      if(data.row==2||data.row==4||data.row==7||data.col==6){
        return;
      }



      let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
      let toBox = { row: data.row, col:data.col };


      this.swapBoxes(fromBox, toBox);

      return false;
    };
    componentDidMount(){

      var table = document.getElementById('mytable');
console.log();


        for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
          if(table.rows[r].id=='7'||table.rows[r].cells[c].id=='6'){
            table.rows[r].cells[c].childNodes[0].setAttribute('draggable',false);
          }
        }
        }
 this.doOperations(this.state.newboard);
    }

    render() {
      return <div>
      <div className='main'>
        <Table newboard={this.state.newboard}
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}/>
          <ul class="flex-container column">
            { this.state.r1?<li class="flex-item">✔</li>:''}
             {this.state.r2?<li class="flex-item">✔</li>:''}
             {this.state.r3?<li class="flex-item">✔</li>:''}
           </ul>
             <ul class="flex-container row">
             {this.state.c1?<li class="flex-item">✔</li>:''}
             {this.state.c2?<li class="flex-item">✔</li>:''}
             {this.state.c3?<li class="flex-item">✔</li>:''}
           </ul>
      </div>


          { console.log(this.state)}
      </div>
    }
    }
  export default BoxesGroup;
