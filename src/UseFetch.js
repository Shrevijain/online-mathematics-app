import React, { useState, useEffect } from "react";
//import Button from './Button'

function DataFetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [qindex, setQIndex] = useState(["1",null]);
  const questionArray = [];

  const baseURL =
    "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=";

  const apiKeys = [
    "AreaUnderTheCurve_21",
    "BinomialTheorem_13",
    "BinomialTheorem_24",
    "AreaUnderTheCurve_15",
    "AreaUnderTheCurve_2",
    "BinomialTheorem_3",
    "BinomialTheorem_4",
    "AreaUnderTheCurve_5",
  ];

  function getQuestionArray(){
    data.forEach((item) => {
       
      item.forEach((question) => {
        questionArray.push(question.Question);
      })
    })
  }
  console.log(getQuestionArray())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDataList = [];
        for (const apiKey of apiKeys) {
          const apiUrl = baseURL + apiKey;

          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          fetchedDataList.push(data);
        }

        setData(fetchedDataList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  useEffect(()=>{
    if(questionArray.length == 0 & data.length>0){
      
      data.forEach((item) => {
       
        item.forEach((question) => {
          questionArray.push(question.Question);
        })
      })
      setCurrentQuestion(questionArray[0])
    }
  },[data]);
 
  const handleButtonClick = (index, value) => {
    // Set the current question when a button is clicked
    setCurrentQuestion(value);
    setQIndex(index + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div className="dashboard">
      <div className="dashboard-page-left">
        <div className="question">
          <b>
            Q.{qindex} {currentQuestion}
          </b>
        </div>
        <div className="previous-next-button">
          <button
            type="button"
            className="btn btn-primary "
          >
            Previous
          </button>
          <button type="button" className="btn btn-primary ">
            Next
          </button>
        </div>
      </div>
      <div className="dashboard-page-right">
        <div>
          <h3>Questions</h3>
        </div>

        <div className="container-button">
          <div className="right-panel">
            {/* Right panel content */}
            <div className="button-grid">
              {data.map((item, value) => (
                <div key={value}>
                  {item.map((question, questionIndex) => (
                    <div key={questionIndex + value}>
                      {/* <div className="hide">
                        {questionArray.push(question.Question)}
                      </div> */}
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={() =>
                          handleButtonClick(value, question.Question)
                        }
                      >
                        {value + 1}
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="question">
    //   {currentQuestion}
    //   </div>

    //   <div className="container-button">
    //     <div className="right-panel">
    //       {/* Right panel content */}
    //         <div className="button-grid">
    //           {data.map((item, value) => (
    //             <div key={value}>
    //               {item.map((question, questionIndex) => (
    //                 <p key={questionIndex+value}>
    //                   {/* Q.{value + 1}{" "}{question.Question} */}
    //                   <button onClick={()=>handleButtonClick(value, question.Question)}>
    //                     {value+1}
    //                   </button>
    //                 </p>
    //               ))}
    //             </div>
    //           ))}
    //         </div>
    //     </div>
    //   </div>

    //</div>
  );
}

export default DataFetching;
