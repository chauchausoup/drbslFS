import React from 'react';


function DashboardNews(){
return(
      <div id="news_dashboard">

      <form id="recent_news">
            <h3>
                  Add Recent News
            </h3>
            <label>
                  Title:
            </label>
            <input type="text" name="title" id="news_title"/><br/>
            <label>
                  Date:
            </label>
            <input type="text" name="date" id="news_date"/><br/>
            <label>
                  Body:
            </label>
            <input type="text" name="body" id="news_body"/><br/>
            
      <button type="submit">Submit</button>


      </form>
</div>
)
}

export default DashboardNews;
