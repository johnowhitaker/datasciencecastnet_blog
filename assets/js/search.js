
var documents = [{
    "id": 0,
    "url": "https://johnowhitaker.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://johnowhitaker.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://johnowhitaker.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://johnowhitaker.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://johnowhitaker.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About&#182;This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter&#182;: Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts&#182;: put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse flag at the top of any cell if you want to hide that cell by default, but stil have it be visible to the reader:              #collapseimport pandas as pdimport altair as alt       put a #collapse_show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse_showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair&#182;: Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown&#182;:       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips&#182;:       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips&#182;:       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables&#182;: You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images&#182;: Local Images&#182;: You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images&#182;: Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs&#182;: Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions&#182;: You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements&#182;Tweetcards&#182;: Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos&#182;: Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts&#182;: Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 5,
    "url": "https://johnowhitaker.github.io/2019/05/17/ml-and-ir-tomography.html",
    "title": "ML and IR Tomography",
    "body": "2019/05/17 - I studied Electrical and Computer Engineering at UCT, and the final year project was my chance to really dive deep into a topic. I chose IR tomography, and explored various questions around that topic. For today’s post, I’ll focus on one small aspect: the use of machine learning. This post will go through some background and then show a couple of ML models in use. For much more detail and my full thesis, see this GitHub repository. Background: This project arose because I wanted to do some experiments with Computed Tomography, but I didn’t know enough to see what would work and what wouldn’t. How many sensors does one need to achieve a particular goal for resolution or performance? What geometries work best? And what if we can’t keep everything nice and regular?  I built some tools that let me simulate these kinds of arrangements, and did some early experiments on image reconstruction and on the use of machine learning (specifically neural networks) to make sense of readings. Even with a weird arrangement like the one on the right, I could make some sense of the data. For more information on the simulation side, see the report in the GitHub repository. I tested out these arrangements in the real world by building some fixed arrangements, and by using a 3D printed scanner to position an LED and a phototransistor (PT from now on) in different locations to slowly simulate having many detectors and emitters.  Using light as opposed to X-rays means cheap emitters and detectors, and of course much less danger.  A ring of 8 LEDs and 8 PTs. Larger rings were also constructed, and the scanner could simulate arrangements of &gt;1000 sensors and emitters. By taking a set of readings, we can start to estimate how much light travels along different paths, and thus build up an image of whatever is being scanned. This works well with lots of readings from the scanner: A reconstructed image of some small nails. The scanner could resolve objects less than 1mm in size. However, for arrangements with relatively few sensors (such as the static arrangement of 8 shown above), the reconstructed images are an apparently meaningless blur. The goal of this project was to use ML to make sense of these sets of readings, for example by identifying objects placed within the sensor ring or estimating their position. Model Selection: To answer the question “can machine learning be useful”, I needed to pick a good approach to take. Simply throwing the data at a decision tree and then noting the performance wouldn’t cut it - every choice needs to be justified. I wrote a notebook explaining the process here, but the basics are as follows:  Define your problem (for example, classifying objects) and load the data Pick a type of model to try (for example, Logistic Regression) Train a model, and see how well it performs by splitting your data into training and testing sets. Use cross-validation to get more representative scores.  Tune the model parameters. For example, try different values on ‘gamma’ (a regularisation parameter) for a Support Vector based classifier.  Repeat for different types of model, and compare the scores Choosing the optimum number of hidden layers for a Multi-Layer Perceptron model (Neural Network) For example, in the case of object classification, a neural network approach worked best (of the models tested): Model scores on a classification task Object Classification: Using the ring with 8 LEDs and 8 PTs, I’d place an object randomly within the ring. The object (one of four used) and location (which of four ‘quadrants’ contained the object) were recorded along with a set of readings from the sensors. This data was stored in a csv file for later analysis. Using the model selected according to the method in the previous section, I was able to achieve an accuracy of 85% (multi-class classification) or 97% (binary classification with only two objects) using 750 samples for training. More training data resulted in better accuracy.  Model performance with more training samples for multi-class classification (orange)and binary classification (blue) This was a fun result, and a good ML exercise. The data and a notebook showing the process of loading the data and training models can be found in the ‘Model Selection’ folder of the GitHub repository. Position Inference: Here, instead of trying to identify an object we attempt to predict it’s location. This requires knowing the position precisely when collecting training data - a problem I solved by using a 3D printer to move the object about under computer control.  Gathering training data for position inference This results in a dataset consisting of a set of readings followed by an X and Y position. The goal is to train a model to predict the position based on the readings. For the ring of 8, the model could predict the location with an error of ~10% of the radius of the ring - approximately 7mm. For the ring of 14 (pictured above, and the source of the linked dataset), I was able to get the RMSE down to 1. 6mm (despite the ring being larger) using the tricks from the next section. You can read more about this on my hackaday. io page.  Playing a game with the sensor ring. The ring can take readings very fast, and being able to go from these readings to a fairly accurate position opens up some fun possibilities. I hooked it up to a game I had written. A player inserts a finger into the ring and moves it about to control a ‘spaceship’, which must dodge enemies to survive. It was a hit with my digs-mates at the time. Using Simulation to boost performance: One downside of this approach is that it takes many training samples to get a model that performs adequately. It takes time to generate this training data, and in an industrial situation it might be impossible to simulate all possible positions in a reasonable time-frame. Since I already had a simulator I had coded, why not try to use it to generate some fake training data? Using purely simulated data resulted in some spectacularly bad results, but if a model was ‘primed’ with even a small real-world training dataset (say, 50 samples) then adding simulated data could improve the model and make it more robust. I’ll let the results speak for themselves: Model performance for position inference with and without simulated data for training The simulator didn’t map to real life exactly, and no doubt could be improved to offer even more performance gains. But even as-is, it allows us to use far less training data to achieve the same result. Notice that a model trained on 150 samples does worse than one using only 50 samples but augmented with extra simulated data. A nifty result to keep in mind if you’re ever faced with a dataset that’s just a little too small! Conclusions: I had a ton of fun on this project, and this post only really scratches the surface. If you’re keen to learn more, do take a look at the full report(PDF) and hackaday project. This is a great example of machine learning being used to get meaningful outputs from a set of noisy, complicated data. And it shows the potential for using simulation of complex processes to augment training data for better model performance - a very cool result. I’m thinking about moving this website in a different direction as I start on a new project - stay tuned for news! "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}