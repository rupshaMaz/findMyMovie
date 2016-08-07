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
      case 2:
        var data = {
              question2 : this.state.selectedOption
            }
      case 3:
        var data = {
              question3 : this.state.selectedOption
            }

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
            <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
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

module.exports = FormQuestion;

