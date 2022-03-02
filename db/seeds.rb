User.destroy_all
Pet.destroy_all
Donation.destroy_all

demo = User.create(username: 'demouser', password: 'password' )

john = User.create(username: 'sarah', password: 'test')
jane = User.create(username: 'jane', password: 'test')
dee = User.create(username: 'dee', password: 'test')

#pets
john.pets.create(name: 'Kahluaeee', age: 15, image: 'https://info.daystarseattle.com/hs-fs/hubfs/Blog%20Images/Dog%20Breeds%20for%20Seniors_2020/Pug%20%7C%20Best%20Dog%20Breeds%20for%20Seniors.jpg?width=200&name=Pug%20%7C%20Best%20Dog%20Breeds%20for%20Seniors.jpg', cause: 'Lymphoma', goal: 1500)

jane.pets.create(name: 'Dolores', age: 6, image: 'https://www.howitworksdaily.com/wp-content/uploads/2015/08/131216Cute-dog-sticking-out-his-tongue-wallpaper-200x200.jpg', cause: 'Stage 1 kidney disease', goal: 500)

dee.pets.create([{name: 'Bones', age: 5, image: 'https://images.everydayhealth.com/images/lung-respiratory/allergies/hcallergieslivingwithcatarticle.jpg?w=1110', cause: 'Heart disease', goal: 300}, {name: 'Ginger', age: 11, image: 'https://media.istockphoto.com/photos/tan-color-cat-laying-down-picture-id530443317?k=20&m=530443317&s=170667a&w=0&h=K2fngSWiQgOLWdTrfrwORGJdXcEFg98mrO4k6oWw7EU=', cause: 'Liver disease', goal: 700}])

john.pets.create(name: 'Thumper', age: 2, image: 'https://dogbreedersguide.com/wp-content/uploads/2014/11/Pomeranian-Cute-Dog-200x200.png', cause: 'Diabetes', goal: 250)
jane.pets.create(name: 'Tango', age: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKMLTT2aDVUkPD5HXyDEQ2TAuKj2UHi33rA&usqp=CAU', cause: 'Stage 3 kidney disease', goal: 250)

jane.pets.create(name: 'Happy', age: 3, image: 'https://downeast.com/wp-content/uploads/2019/05/1907_Dogs20b-200x200.jpg', cause: 'Ringworm', goal: 1400)

jane.pets.create(name: 'Tinny', age: 5, image: 'https://www.seasidehillcrest.com/wp-content/uploads/elementor/thumbs/french-bulldog-summer-smile-joy-160846-pbs68iyk9uiydonz1hxrat0x8jebwy91monj9icb80.jpeg', cause: 'Stage 2 kidney disease', goal: 1300)

jane.pets.create(name: 'Jelly', age: 10, image: 'https://dollyslegacyanimalrescue.org/wp-content/uploads/2022/01/272591465_3139746596301725_2060049967775908663_n-200x200.jpg', cause: 'Cancer', goal: 8000)

jane.pets.create(name: 'Mello', age: 8, image: 'https://www.skierlawfirm.com/wp-content/uploads/2017/03/AnimalCruel_Cat-200x200.jpg', cause: 'Feline Immunodeficiency Virus', goal: 6000)

