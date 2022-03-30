import { useState, useEffect } from "react";

const initialFormValues = { fullname: '', phoneNumber: '' }

function Form({ addContacts, contacts }) {
  const [form, setform] = useState(initialFormValues);

  useEffect(() => {
    setform(initialFormValues)
  }, [contacts])
  

  const onChangeInput = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // formun oto sayfa yenileme işlemini engellemek için yapılır
    e.preventDefault();

    if (form.fullname === '' || form.phoneNumber === '') {
      return false;
    }
    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
