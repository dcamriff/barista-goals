User.destroy_all
Category.destroy_all
FieldNote.destroy_all


ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

diane = User.create!(
    username: "iamdiane",
    firstname: "Diane",
    lastname: "R",
    email: "diane@testemail.com",
    password: "password",
    picture: "https://i.imgur.com/6zBXxmY.jpg",
    company: "Octane"
)

supriya = User.create!(
    username: "iamsupriya",
    firstname: "Supriya",
    lastname: "Y",
    email: "supriya@testemail.com",
    password: "password",
    company: "Revelator"
)

ninti = User.create!(
    username: "iamninti",
    firstname: "Ninti",
    lastname: "C",
    email: "ninti@testemail.com",
    password: "password",
    picture: "https://i.imgur.com/EYEYtmF.jpg",
    company: "Ebrik"
)

espresso = Category.create!(
    name: "espresso-based",
    cat_type: "drink",
    description: "Consists of any drinks that are espresso-based. This a a good place to detail espresso shot params, milk-to-espresso ratios, and latte art techniques.",
    image: "https://i.imgur.com/Q65ZQMo.png",
    active: true
)

coffee = Category.create!(
    name: "coffee",
    cat_type: "drink",
    description: "Give tasting notes for single-origin roasted coffees. This is a great way to expand your flavor palette. Be sure to detail origin, variety, and elevation if known.",
    image: "https://i.imgur.com/8l0sMGH.jpg",
    active: true
)
tea = Category.create!(
    name: "tea",
    cat_type: "drink",
    description: "Tea has it's own complexities and brew methods. Keep good steeping and tasting notes to build your palette.",
    image: "https://i.imgur.com/20V8M2e.png",
    active: true
)

manualbrew = Category.create!(
    name: "manual brewing",
    cat_type: "gear",
    description: "Tell us about some equipment and parameters you're testing for manual brew methods.",
    image: "https://i.imgur.com/UvUnjfK.jpg",
    active: true
)

scales = Category.create!(
    name: "scales",
    cat_type: "gear",
    description: "Give us the lowdown on precision and variables when experimenting with scales.",
    image: "https://www.williams-sonoma.com/wsimgs/ab/images/dp/wcm/201803/0007/img40o.jpg",
    active: true
)

machines = Category.create!(
    name: "machines",
    cat_type: "equipment",
    description: "You'll work on different espresso machines throughout your career. Keep track of tips and quirks your encounter.",
    image: "https://i.imgur.com/Rku2Ipw.png",
    active: true
)

grinders = Category.create!(
    name: "grinders",
    cat_type: "equipment",
    description: "2 oz espresso, 4 oz steamed chai, 4 oz steamed milk",
    image: "https://i.imgur.com/iPfffm6.png",
    active: true
)

tools = Category.create!(
    name: "tools",
    cat_type: "gear",
    description: "This is where we talk about all our miscellaneous geeky tools that we have relied on.",
    image: "https://i.imgur.com/LHIrlA1.jpg",
    active: true
)

books = Category.create!(
    name: "books",
    cat_type: "gear",
    description: "Have any good reading material you'd like to share?",
    image: "https://i.imgur.com/STug8Ya.jpg",
    active: true
)

fieldnote1 = FieldNote.create(
    user: diane,
    category: espresso,  
    title: "mocha art",
    memo: "This pour won me a local latte art competition.",
    image: "https://i.imgur.com/CwJbBLM.jpg",
    year: 2018,
    tags: "#mocha #latte #chocolate #latteart #espresso"
)

fieldnote2 = FieldNote.create!(
    user: diane,
    category: espresso,
    title: "cortado 101",
    memo: "The cortado wasn't common in many ATL indie shops until the past couple of years. This drink took me a while to master to pour. It's 2oz of espresso to 2 oz of micro steamed milk.",
    image: "https://i.imgur.com/9uzEBTm.png",
    year: 2017,
    tags: "#cortado #latteart #espresso"
)
fieldnote3 = FieldNote.create!(
    user: diane,
    category: espresso,  
    title: "this milk steaming pitcher da bomb!",
    memo: "Love using the 12oz milk steaming pitcher by Espresso Parts. It gives good control of my free hand pouring.",
    image: "https://i.imgur.com/ttOWsW4.jpg",
    year: 2018,
    tags: "#latteart #espressoparts #pitcher"
)

fieldnote4 = FieldNote.create(
    user: ninti,
    category: manualbrew,  
    title: "love my chemex",
    memo: "I've been testing out a natural process coffee from Ethopia as my morning brew lately.",
    image: "https://i.imgur.com/ZTWpRCn.jpg",
    year: 2018,
    tags: "#chemex #ethopiacoffee #19grams"
)

fieldnote5 = FieldNote.create(
    user: supriya,
    category: manualbrew,  
    title: "aeropress",
    memo: "First time I've used an aeropress and you can brew a nice syrupy consistency like espresso.",
    image: "https://i.imgur.com/Ice7CD0.png",
    year: 2018,
    tags: "#aeropress"
)

