import React, { Component } from 'react';
import './styling/SearchBar.scss'

class SearchBar extends Component {
        state ={
            style1: {padding:"10px", borderBottom:"2px solid #f3f2f2",textAlign:"center" },
            input : ""
        }
       
        changeHandle  = (e) => {
            this.setState({ input : e.target.value});
           
        }

        submitHandle = (e) => {
            e.preventDefault();
            this.props.delivery(this.state.input)
        }
       
    
        
        render() {
            return (
                <div className="c2" >
                    <h1  className="ui header red container">Diligent Video<i className="video icon"></i></h1>
                    <form onSubmit={this.submitHandle}>     
                        {/* this class names is related to "semantic ui" css library */}
                        <div  className="ui big action input">  
                            <input type="text" name="search"   
                            onChange={this.changeHandle}
                            // onFocus={null}
                            // onBlur={null}
                            />
                            <button onClick={this.submitHandle} className="ui button red" >Search</button> 
                        </div>
                    </form>
                </div>
            );
        }
}

export default SearchBar;

// AIzaSyB5t8v5mKBfdQ3oDEmhWDDn2rgXXHAUXkI