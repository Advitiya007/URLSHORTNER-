import { nanoid } from "nanoid";
import { URLMODEL } from "../model/url.model.js";

async function postsomeurl(req, res) {
  const { givenurl } = req.body;
  if (!givenurl) {
    return res.status(400).json({ error: "Please provide a URL to shorten" });
  } else {
    return res.send({
      url: givenurl,
      msg: "soomeurl ahs been provided in post",
    });
  }
}

async function postshorturl(req, res) {
  // get shortr url meim req.params.givenurl (when given url was a para sent thru route)
  // the deal was when i used some https :google as my given url due to the slahses it didnt work preoperly

  const anmy = req.body.givenurl;
  console.log("requestinf body data o [ostshorturl " + req.body);
  // url filed mad in postman as json object
  console.log(req.body);

  console.log(anmy);
  // in get body always empty so use paramteres
  // or req.body.originalurl
  // const newurl="https://shorturladi";
  // newurl+=id;
  const id = nanoid();
  const newurl = `https://shorturladi/${id}`;
  await URLMODEL.create({
    shortid: id,
    givenurl: anmy,
    createdby:req.user._id
    // recievd from kiddleware req.user=user usse id leli 
  //   _id: new ObjectId('6873e618edc097b458c2018a'),
  // shortid: 'U0wSjWpMYGe34ibBZe3xN',
  // givenurl: 'https://www.youtube.com/watch?v=OWeruyqhiTo&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=23',
  // clicks: 1,
  // createdby: new ObjectId('6873dfc9c48a7f1c0448c318'),
  // createdAt: 2025-07-13T17:00:08.968Z,
  // updatedAt: 2025-07-13T17:00:13.726Z,
  // __v: 0


    // clicks:0
  });
  // return res.json({oldurl:anmy,shorturl:newurl});
  // this was done before rendering now we have to render the short url in our ejs file

  return res.render("HOMEPAGE", {
    // shortid:id,
    id,
  });
}

// async function clicks(req,res){
//     let clicks=URLMODEL.clicks+=1;
// }

async function getclicksdata(req, res) {
  const shortid = req.params.shortid;
  const givenurl = req.params.givenurl;
  // here braces must be used as query object is being sent
  const entry = await URLMODEL.findOne({ shortid: shortid });
  // const entry2= await URLMODEL.findOne({givenurl})
  if (!entry) {
    return res.status(404).json({ error: "URL not found" });
  }
  const html = `<h1>URL Analytics</h1>
<p> TRAFFIC ON SITE ${entry.givenurl}= NO. OF CLICKS = ${entry.clicks}</p>
<p> NEW OPTION CREATED USING URL SO NO. OF CLICKS ${entry.clicks} FOR THE TRUE URL  ${entry.givenurl}</p>`;
  return res.send(html);
  // console.log(entry.givenurl)
  // return res.render("HOMEPAGE",{
  //     clicks:entry.clicks,
  //     givenurl:entry.givenurl
  // })
  // dont send her e{html} as it will be sent as json object
}
export { postshorturl, postsomeurl, getclicksdata };
