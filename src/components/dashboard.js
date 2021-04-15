import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AC_LIST_DATA} from '../action/countriesaction';
import {Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props){
      super(props);
      this.state={
        search : '',
      }
      this.search=this.search.bind(this);
    }
    onChangeValue(event){
        const name  = event.target.name;
        const value = event.target.value;
        this.setState({search:value});
        document.body.style.backgroundColor="none";

    }
    remove(){
      window.location='/';
      window.location.reload(false);
    }
    search() {
	     let searched = this.state.search;
       if (searched != "") {
  	   let text = document.getElementById("text").innerHTML;
  	   let re = new RegExp(searched,"gi");
		   let newText = text.replace(re, `<mark style="background-color:yellow;" >${searched}</mark>`);
		   document.getElementById("text").innerHTML = newText;

  }
}
    componentDidMount(){
     this.props.List();
    }
    render(){
      const List = this.props.CountriesReducer.List;
      const arr = [];
      var flag = [];
      for(var i=0;i<List.length;i++){
        flag.push(<img src={List[i].flag} style={{width:"50px",height:"30px"}}></img>);
        arr.push(
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                {flag[i]}
                  <div >
                  <h4 >{List[i].name}{" "}</h4>
                    <label>Latitude & Longitude:</label>{" "}{List[i].latlng[0]}{" , "}{List[i].latlng[1]}
                  <div className="table-responsive">
                    <table className="table" >
                      <thead>
                        <tr>
                          <th> Alpha2Code </th>
                          <th> Alpha2Code </th>
                          <th> CallingCode </th>
                          <th> Capital </th>
                          <th> Region </th>
                          <th> Sub-Region </th>
                          <th> Population </th>
                          <th> Time-zone </th>
                        </tr>
                      </thead>
                      <tbody>
                        <td> {List[i].alpha2Code} </td>
                        <td> {List[i].alpha3Code} </td>
                        <td> {List[i].callingCodes} </td>
                        <td> {List[i].capital} </td>
                        <td> {List[i].region} </td>
                        <td> {List[i].subregion} </td>
                        <td> {List[i].population} </td>
                        <td> {List[i].timezones} </td>
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      }
      return(
          <div className="content-wrapper">
            <label>Search : </label>
            <input type="text" name="search" value={this.state.search} onChange={(e)=>this.onChangeValue(e)}  />
              <button onClick={this.search}>Find</button>
              <button onClick={this.remove}>Remove</button>
            <div className="row"  id="text">
              {arr}
            </div>
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    CountriesReducer   : state.CountriesReducer,
  };

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({List:AC_LIST_DATA},dispatch);
}
const DashboardComponent = connect(mapStateToProps,mapDispatchToProps)(Dashboard);

export default DashboardComponent;
