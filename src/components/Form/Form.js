import "./Form.css";

const Form = ({articles, setSection}) => {
  // console.log("ARTICLES: ", articles)
  // console.log("ARTICLES.RESULTS: ", articles.results)

  // let articlesSections = articles.results.map( section => {
  //       return (
  //     <option
  //       key={section.short_url}
  //       id={section.short_url}
  //       value={section.section}
  //       // onClick={(e) => handleMovieChange(e.target.value)}
  //     >
  //       {section.section}
  //     </option>
  //   );
  // })

  return (
    <form className="form-container">
      <select className="dropdown">
        <option value="">Select a Section</option>
        {/* {articlesSections} */}
      </select>
    </form>
  );
};

export default Form;
