# Mid-Project Checkin
### Jay Woo and Casey Alvarado

* Did you accomplish your goals?  If not, what happened?

Our goals were to clean and explore the data, as well as to design a visualization that tells the story we want to tell. We basically accomplished all of these over the past week, and we’re looking to delve into more advanced visualization methods throughout the upcoming week. 

* What have you accomplished thus far in the project?  Make sure to provide pointers to any intermediate artifacts generated from your project.  These artifacts could be code, plots, data, etc.

From our data exploration ([data_cleaning_exploration.ipynb](https://github.com/jay-woo/DataScience16CTW/blob/master/data_cleaning_exploration.ipynb)), we discovered a positive correlation between the percentage of Catholics in each state and the number of sexual assault cases involving Roman Catholic officials. This helped us think about the narrative and to ultimately design a compelling visualization, which we will hopefully implement by the time the project is over. As for the design of our visualization, we decided to focus on showing a scatterplot showing the clear relationship between the percentage of Catholics by state and the normalized count of sexual assault cases. We tried using some map visualization tools like Bokeh ([visualization_iterations.ipynb](https://github.com/jay-woo/DataScience16CTW/blob/master/visualization_iterations.ipynb)), but we realized that it didn’t really fit for our storytelling purposes. We instead wanted to show that larger Catholic communities tended to have way more sexual assault cases.

* What is the minimum viable product that you will have done by next Friday?  What are your stretch goals?

Eventually, we would like to make the plot interactive, so that users can zoom into each individual case, much like in Alberto Cairo’s gun violence visual. We could make something relatively basic in Python and that would be our MVP. Our stretch goal would be to do more research about more advanced tools like D3 and use that instead of Python.
