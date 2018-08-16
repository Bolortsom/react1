import React, { Component } from 'react';


class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
      console.log('Submitted');
      e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category =>{
        return <option key={category} value="category">{category}</option>
    });
    return(
        <div>
            <h2>Add Project</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title:</label><br />
                    <input type="text" ref="title"/>
                </div>
                <div>
                    <label>Category</label><br />
                    <select ref="category">
                    {categoryOptions}
                    </select>
                </div>
                <input type="submit" value="Push me"/>
            </form>
        </div>
    );
  }
}

export default AddProject;
