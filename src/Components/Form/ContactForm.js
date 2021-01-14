import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import s from './Form.module.css';

function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({ id: '', name: '', number: '' });

  const onInputChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const reset = () => setContact({ id: '', name: '', number: '' });

  const onAddContact = e => {
    e.preventDefault();
    onSubmit(contact, uuidv4());
    reset();
  };

  return (
    <form className={s.form} onSubmit={onAddContact}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={contact.name}
          onChange={onInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="text"
          name="number"
          value={contact.number}
          onChange={onInputChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ===========================================================================

// class ContactForm extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   onInputChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onAddContact = e => {
//     e.preventDefault();
//     this.setState({ id: uuidv4() }, () => {
//       this.props.onSubmit(this.state);
//       this.reset();
//     });
//   };

//   reset = () => this.setState({ id: '', name: '', number: '' });

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.onAddContact}>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.onInputChange}
//           />
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             className={s.input}
//             type="text"
//             name="number"
//             value={this.state.number}
//             onChange={this.onInputChange}
//           />
//         </label>
//         <button className={s.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default ContactForm;
