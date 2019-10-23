import React from 'react'
import { fromEvent } from 'rxjs';
import { Button } from 'semantic-ui-react';


class Example extends React .Component {
   constructor() {
       super()
    //    this.handleClick=this.handleClick.bind(this)
   }

//    handleClick (event) {    
//     const subscription = myObservable.subscribe(event => console.log(event));
//    }
    render() {
      
        // const subscription = myObservable.subscribe(event => console.log(event));
        return (
            <div>
                {/* <Button onClick={this.handleClick}>click</Button> */}
            </div>
        )
    }

}
export default Example