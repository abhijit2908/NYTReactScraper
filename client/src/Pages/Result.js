import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import { SubmitBtn } from '../components/Form/SubmitBtn';
import Title from '../components/Title/Title.js';
import Header from '../components/Header/Header.js';
import Jumbotron from '../components/Jumbotron/Jumbotron.js';
import Container from '../components/Container/Container.js';
import { List } from '../components/List/List';
import { ListItem } from '../components/List/ListItem';
import { SaveBtn } from '../components/Buttons/SaveBtn';
import {RemoveBtn} from '../components/Buttons/RemoveBtn';
import API from '../Utils/API.js';

class SearchForm extends Component{
    
    state={
        topic:"",
        startYear:"",
        endYear:"",
        result:[],
    savedArticle:[]
      };
    
      handleInputChange = event => {
        const{name,value} = event.target;
        this.setState({
          [name]:value
        })
       };

       handleFormSubmit = event => {
        event.preventDefault();
          //make a call to api with below input field
         var topic = this.state.topic;
          var startYear = this.state.startYear;
         var endYear= this.state.endYear;
         var queryTerm = {topic,startYear,endYear};
         console.log(queryTerm);

         API.getArticles(queryTerm)
      .then(res => {
        console.log(res.data);
        this.setState({
          results: res.data.response.docs,
          topic: "",
          startYear: "",
          endYear: ""
        })
      })
      .catch(err => console.log(err));
      };

      render(){
        return(
      <div>
      <Jumbotron/>
      <Container title="Search" body="body">
      <form>
      <Title>Topic</Title>
     <Input name="topic" placeholder="Topic" value={this.state.topic} onChange={this.handleInputChange}/>
     <Title>Start Year</Title>
     <Input name="startYear" placeholder="StartYear" value={this.state.startYear} onChange={this.handleInputChange}/>
     <Title>End Year</Title>
     <Input name="endYear" placeholder="EndYear" value={this.state.endYear} onChange={this.handleInputChange}/>
    </form>
    <SubmitBtn onClick={this.handleFormSubmit}>Search</SubmitBtn>
          </Container>
        <Container title="Results" body="body">
        {this.state.result.length ? (
        <List>
          {this.state.result.map(resultrow =>(
          <ListItem>
            {resultrow}
            <SaveBtn value="Save"/>
          </ListItem>
          ))}
        </List>
        ):(<h3>No results to Display</h3>)}
         </Container>
        <Container title="Saved Articles" body="body">
        {this.state.savedArticle.length ? (
          <List>
            {this.state.savedArticle.map(resultrow =>(
            <ListItem>
              {resultrow}
              <RemoveBtn value="Remove"/>
            </ListItem>
            ))}
          </List>
          ):(<h3>No results to Display</h3>)}
        </Container>
   </div>
        );
      
    }

};

export default SearchForm;