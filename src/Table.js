import React from 'react';
import Row from './Row';
import Test from './test';
class Table extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        
         //newboard: [[1,1,17,5,2],[6,'+',1,'+',' ','=',8],['+',' ','+',' ','+'],[2,'+',' ','+',1,'=',20],['+',' ','*',' ','+ '],[' ','+',2,'+',5,'=',9],['=',' ','=',' ','='],[10,' ',36,' ',6]]
      };
      
     
    }
    
    initBoard() {
      //let board = [[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,0]];
     // let newboard: [[1,1,17,5,2],[6,'+',1,'+','1','=',8],['+',' ','+',' ','+'],[2,'+',17,'+',1,'=',20],['+',' ','*',' ','+ '],[2,'+',2,'+',5,'=',9],['=',' ','=',' ','='],[10,' ',36,' ',6]]
     let operators = ['+','+','+','+','+','+','*','+','+','+','+','+'];
     let answers = [8,20,9,10,36,6];
     let numbers = [1,1,1,2,2,2,6,17,5];
     let options =[1,1,17,5,2]
     let preset = numbers - options;
     
     
     
    }
    
   
 

    

    
    componentWillMount() {
      this.initBoard();
 
    }
  
componentDidMount(){
 
  
}




    render() {
     
      {
        
      
      }
      return (
        <div className="main">
         
          <table id = "mytable">
           
            {this.props.newboard.map((row, i) => (<Row key={i} rowIndex={i} row={row}  
          onDragStart={this.props.onDragStart}
          onDragOver={this.props.onDragOver}
          onDrop={this.props.onDrop}  />))}
          </table>
     <ul class="flex-container column">
        <li class="flex-item">1</li>
        <li class="flex-item">2</li>
        <li class="flex-item">3</li>
       
        
      </ul>
        <ul class="flex-container row">
        <li class="flex-item">1</li>
        <li class="flex-item">2</li>
        <li class="flex-item">3</li>
      
        
      </ul>
         
        </div>
      );
    }
  };
export default Table;  