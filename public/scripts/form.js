var selection = {
    question1 : null,
    question2 : null,
    question3 : null,
   }

var formData = {
    question : null,
    option1 : null,
    option2 : null,
    option3 : null 
}   

var FormQuestion = React.createClass({
  
  getInitialState: function () {
    return {
      selectedOption: 'option1'
    };
  },

  handleOptionChange: function (changeEvent) {
   this.setState({
     selectedOption: changeEvent.target.value
   });
  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();
    switch(this.props.step){
      case 1:
        var data = {
              question1 : this.state.selectedOption
            }
            break;
      case 2:
        var data = {
              question2 : this.state.selectedOption
            }
            break;
      case 3:
        var data = {
              question3 : this.state.selectedOption
            }
            break;

    }
    this.props.saveValues(data)
    this.props.nextStep()
    console.log('You have selected:', this.state.selectedOption);
  },

  render: function() {
    return (
      <div className="formQuestion">
        <h2 className="question">
          {this.props.formData.question}
        </h2>
        <form onSubmit={this.handleFormSubmit}>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
            {this.props.formData.option1}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
            {this.props.formData.option2}
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3"checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange} />
            {this.props.formData.option3}
          </label>
        </div>
        <button className="btn btn-default" type="submit">Next</button>
      </form>
       
      </div>
    );
  }
});


var MovieForm = React.createClass({
  getInitialState: function() {
    return {
      step: 1
    }
  },

  saveValues: function(selections) {
    return function() {
      selection = Object.assign({}, selection, selections)
    }()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  render: function() {
    switch (this.state.step) {
      case 1:
            var data = {
              question : "which genre",
              option1 : "romance",
              option2 : "comedy",
              option3 : "drama"
            }
            break;
            
      case 2:
        var data = {
              question : "which time",
              option1 : "60's",
              option2 : "70's",
              option3 : "80's"
            }
            break;
      case 3:
        var data = {
              question : "which setting",
              option1 : "west",
              option2 : "europe",
              option3 : "asia"
            }
            break;
    }
    formData = Object.assign({}, formData, data)
    return <FormQuestion formData = {formData} saveValues = {this.saveValues} 
                        nextStep = {this.nextStep} step = {this.state.step} 
                        currentSelection = {this.state.selection}/>
  }
});



ReactDOM.render(
  <MovieForm/>,
  document.getElementById('content')
);
