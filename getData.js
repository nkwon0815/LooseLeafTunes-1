let $div1_ = document.querySelector('#data');

function getData(url, str) {
    return 	fetch(url, {
		 method: 'POST',
     headers: {
      'Ocp-Apim-Subscription-Key': '41e945cda6e346549d9a176dac339540',
      'Content-Type'             : 'application/json',
      'Accept'                   : 'application/json'
     },
     body: '{\
      "documents": [\
        {\
          "language": "en",\
          "id": "1",\
          "text":"'+ str + '"\
        }\
      ]\
    }'
   })
   .then((response) => { 
   	 return response.json().then((data) => {
     	return data;
    }).catch((err) => {
       console.log(err);
    }) 
  });
}

function parseData(str) {
    return getData(
    'https://musicsynth.cognitiveservices.azure.com/text/analytics/v3.1/sentiment',
    str
	  ).then((jsonData) => {
        console.log(
          parseFloat(jsonData.documents[0].confidenceScores.neutral),
          parseFloat(jsonData.documents[0].confidenceScores.positive),
          parseFloat(jsonData.documents[0].confidenceScores.negative)
        )
        console.log("Bye");
    })
}



