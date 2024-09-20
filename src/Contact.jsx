const Contact = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="text-xl mb-3">Contact Us page</h1>
      <label>Name</label>
      <input className="border border-black rounded m-1 " />
      <label>Message</label>
      <input className="border border-black rounded m-1 " />
      <button className="bg-blue-400 hover:bg-blue-600 px-2 rounded">
        Submit
      </button>
    </div>
  );
};
export default Contact;
