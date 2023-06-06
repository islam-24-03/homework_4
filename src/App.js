import React from 'react';

class RegForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         phone: '',
         email: '',
      };
   }

   handleSubmit = (e) => {
      e.preventDefault();
      console.log('ФИО:', this.state.name);
      console.log('Номер телефона:', this.state.phone);
      console.log('Email адрес:', this.state.email);
   };

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   render() {
      return (
         <div className='box'>
            <div className='bl'>
               <div className='block_2'>
                  <h3>Регистрация пользователя</h3>
               </div>
               <form onSubmit={this.handleSubmit}>
                  <div className='n-phone'>
                     <label htmlFor="name">ФИО:</label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                     />
                  </div>

                  <div className='n-phone'>
                     <label htmlFor="phone">Ном:</label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        required
                     />
                  </div>
                  <div className='n-phone'>
                     <label htmlFor="email">Email:</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                     />
                  </div>
                  <div>
                     <button type="submit">Submit</button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

export default RegForm;