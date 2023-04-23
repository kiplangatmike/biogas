import { useState, useEffect } from "react";

export default function MyComponent() {
  const [scriptData, setScriptData] = useState(null);

  useEffect(() => {
    // Fetch HTML document here
    const fetchHtml = async () => {
      const response = await fetch("http://localhost:3000/index.html");
      const htmlString = await response.text();
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(htmlString, "text/html");
      const scriptTag = htmlDoc.querySelector("#sample");
      if (scriptTag) {
        setScriptData(scriptTag.textContent);
      }
      socket.on("data", function (data) {
        console.log(data);

        const li = document.createElement("li");
        li.textContent = data;
        // Append the list item to the list
        myList.appendChild(li);
      });
    };
    fetchHtml();
  }, []);

  return <div>{scriptData ? <pre>{scriptData}</pre> : <p>Loading...</p>}</div>;
}
