import React, { useState } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import "./../SCSS/_home.scss";

const bannerData = [
  {
    id: 1,
    title: "The Furniture That Defines You",
    image: "banner_01",
  },
  {
    id: 2,
    title: "The Furniture That Defines You",
    image: "banner_02",
  },
  {
    id: 3,
    title: "The Furniture That Defines You",
    image: "banner_03",
  },
  {
    id: 4,
    title: "The Furniture That Defines You",
    image: "banner_04",
  },
];

const productData = [
    {
        id:1,
        title: "Sofa",
        category: [
            {
                id:1,
                categoryName:"By Size",
                type:['Small & 2 Seater Sofas','3 Seater Sofas','4 Seater Sofas','Armchairs']
            },
            {
                id:2,
                categoryName:"By Type",
                type:['Sofa Beds & Chair Beds','Corner Sofas','Modular Sofas','Chaise Longues & Day Beds','Love Seats','Chesterfield Sofas']
            },
            {
                id:3,
                categoryName:"By Material",
                type:['Leather Sofas','Velvet Sofas','Fabric Sofas']
            },
            {
                id:4,
                categoryName:"Everything Else",
                type:['Custom Made Sofas','Sofa Sizer','Sofa Buying Guide','Sofa Bed Buying Guide','Sofa Care Guide','Virtual Designer']
            },
        ]
    },
    {
        id:2,
        title: "Lamp",
        category: [
            {
                id:1,
                categoryName:"Lamps",
                type:['Floor Lamps','Table Lamps','Study Lamps','Lampshades',"Table Lanterns",'Filament Bulbs']
            },
            {
                id:2,
                categoryName:"Wall Lights",
                type:['Wall Sconces','Wall Laterns','Picture Lights','Bath Lights','Love Seats','Chesterfield Sofas']
            },
            {
                id:3,
                categoryName:"Ceiling Lights",
                type:['Chandeliers','Hanging Lights','Flush Mounts','Panel Lights']
            },
            {
                id:4,
                categoryName:"Outdoor Lights",
                type:['Gate Lights','Outdoor Wall Lights','Outdoor Hanging','Sofa Bed Buying Guide','Garden Lights']
            },
        ]
    },
    {
        id:3,
        title: "Basket",
        category: [
            {
                id:1,
                categoryName:"By Size",
                type:['Small & 2 Seater Sofas','3 Seater Sofas','4 Seater Sofas','Armchairs']
            },
            {
                id:2,
                categoryName:"By Type",
                type:['Sofa Beds & Chair Beds','Corner Sofas','Modular Sofas','Chaise Longues & Day Beds','Love Seats','Chesterfield Sofas']
            },
            {
                id:3,
                categoryName:"By Material",
                type:['Leather Sofas','Velvet Sofas','Fabric Sofas']
            },
            {
                id:4,
                categoryName:"Everything Else",
                type:['Custom Made Sofas','Sofa Sizer','Sofa Buying Guide','Sofa Bed Buying Guide','Sofa Care Guide','Virtual Designer']
            },
        ]
    },
    {
        id:4,
        title: "Chair",
        category: [
            {
                id:1,
                categoryName:"Lamps",
                type:['Floor Lamps','Table Lamps','Study Lamps','Lampshades',"Table Lanterns",'Filament Bulbs']
            },
            {
                id:2,
                categoryName:"Wall Lights",
                type:['Wall Sconces','Wall Laterns','Picture Lights','Bath Lights','Love Seats','Chesterfield Sofas']
            },
            {
                id:3,
                categoryName:"Ceiling Lights",
                type:['Chandeliers','Hanging Lights','Flush Mounts','Panel Lights']
            },
            {
                id:4,
                categoryName:"Outdoor Lights",
                type:['Gate Lights','Outdoor Wall Lights','Outdoor Hanging','Sofa Bed Buying Guide','Garden Lights']
            },
        ]
    },
    {
        id:5,
        title: "Table",
        category: [
            {
                id:1,
                categoryName:"By Size",
                type:['Small & 2 Seater Sofas','3 Seater Sofas','4 Seater Sofas','Armchairs']
            },
            {
                id:2,
                categoryName:"By Type",
                type:['Sofa Beds & Chair Beds','Corner Sofas','Modular Sofas','Chaise Longues & Day Beds','Love Seats','Chesterfield Sofas']
            },
            {
                id:3,
                categoryName:"By Material",
                type:['Leather Sofas','Velvet Sofas','Fabric Sofas']
            },
            {
                id:4,
                categoryName:"Everything Else",
                type:['Custom Made Sofas','Sofa Sizer','Sofa Buying Guide','Sofa Bed Buying Guide','Sofa Care Guide','Virtual Designer']
            },
        ]
    },
    {
        id:6,
        title: "Dining",
        category: [
            {
                id:1,
                categoryName:"Lamps",
                type:['Floor Lamps','Table Lamps','Study Lamps','Lampshades',"Table Lanterns",'Filament Bulbs']
            },
            {
                id:2,
                categoryName:"Wall Lights",
                type:['Wall Sconces','Wall Laterns','Picture Lights','Bath Lights','Love Seats','Chesterfield Sofas']
            },
            {
                id:3,
                categoryName:"Ceiling Lights",
                type:['Chandeliers','Hanging Lights','Flush Mounts','Panel Lights']
            },
            {
                id:4,
                categoryName:"Outdoor Lights",
                type:['Gate Lights','Outdoor Wall Lights','Outdoor Hanging','Sofa Bed Buying Guide','Garden Lights']
            },
        ]
    },
]
function Home() {
  const [banner, setBanner] = useState(bannerData);

  return (
    <>
      <div className="page">
        <Navbar productData={productData}/>
        <Banner banner={banner} />
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet ipsam officia velit soluta quibusdam doloremque error esse accusamus magni expedita sed fugit, odio quis. Necessitatibus excepturi rem expedita quia. Reprehenderit provident magnam autem veniam voluptatibus accusamus nesciunt exercitationem et natus quam, dolorem velit id cupiditate, eveniet tempore consectetur sit aliquid dignissimos? Est nostrum, sequi assumenda qui quae doloribus dolorem possimus obcaecati necessitatibus corporis aliquam praesentium voluptatum mollitia odio blanditiis labore aperiam magnam, hic quidem expedita delectus dolore dignissimos, quod aut. Fugiat accusamus repellendus expedita eum id debitis tempore reprehenderit, atque itaque vitae ullam, omnis sapiente. Amet ab quidem quaerat repudiandae excepturi molestias tempore corrupti iure numquam exercitationem unde placeat facilis non et molestiae minima, quisquam sequi, eligendi dolorum aliquam velit cumque rerum quasi! Magnam, fugiat illo? Nemo rerum debitis ad doloribus velit! Voluptate doloremque est voluptates, corporis animi quisquam, ea quos laudantium praesentium enim optio itaque, corrupti recusandae commodi a numquam temporibus reiciendis possimus. Rem sint voluptates assumenda quibusdam consequuntur mollitia a itaque. Nulla facere nostrum non aut magnam consectetur! Ad molestias enim, exercitationem ipsum illum dignissimos praesentium nam. Veniam reiciendis magnam, necessitatibus itaque aut voluptate illo tempore, temporibus esse nulla blanditiis quod cum veritatis asperiores, quam minima. Ut consectetur quidem a vitae accusantium voluptatem unde minus amet laboriosam! Architecto iusto ipsam ad hic laborum culpa nobis aliquid impedit ipsa explicabo, quos pariatur, placeat porro reprehenderit odit minus illum quidem molestiae unde, alias eveniet. Ea unde sapiente, obcaecati ut quis, eos autem ullam quas placeat rerum porro maiores ad provident perferendis totam quisquam quidem repellat cum aliquid deleniti commodi necessitatibus. Iusto sunt, dicta vero pariatur non facilis repudiandae quam quidem molestias veniam alias ipsum iure inventore quod aperiam, rem doloremque laboriosam recusandae? Ipsa totam excepturi ipsam fugiat aperiam repellendus harum eligendi numquam accusantium corporis officia, temporibus vel voluptas libero, mollitia dolorem quo eveniet nulla. Minus ut officiis vel optio distinctio saepe ratione commodi quaerat quas, temporibus, voluptas harum laborum error libero sit animi atque quibusdam sed rem, facilis quia! Saepe sit, omnis corrupti nisi eaque sed, illo voluptates tempore non dolore doloremque quae laboriosam expedita culpa accusamus nesciunt quisquam velit dolor commodi possimus sapiente quam et nulla! Ab amet repellat cum saepe possimus est ipsa laboriosam temporibus eius numquam aperiam voluptatibus hic minima corrupti, doloribus aliquid, accusamus modi. Quam distinctio ipsum nam voluptatum maxime nesciunt culpa quisquam aliquam fuga quasi. Minima modi vitae saepe labore officia, harum maiores quos reprehenderit neque molestias quod dolorem quam ad iste exercitationem deleniti impedit. Voluptatum qui sint officiis obcaecati, ipsum ratione earum vel atque quia magni quidem nam impedit cum veniam accusamus omnis eius nemo. Deserunt eos ab, numquam quidem corporis adipisci illo natus possimus enim magnam amet totam voluptatibus obcaecati expedita. Nostrum quam voluptates mollitia praesentium, itaque suscipit ab molestiae rem necessitatibus earum cum. Doloremque porro sint aperiam a eveniet asperiores alias nemo, doloribus, praesentium possimus saepe non harum odio consequatur magnam! Saepe autem quisquam omnis blanditiis perspiciatis, beatae voluptatem pariatur molestiae labore! Ea, rem. Itaque obcaecati laudantium, nihil cupiditate dolorum saepe ipsam amet tempora, error maiores, accusantium repudiandae soluta magnam voluptatem magni eveniet dolores fugit sit corrupti illum? Suscipit culpa enim, odit facere eum alias hic temporibus iusto sit veritatis magni fugiat fugit inventore blanditiis? Illo, iste, laborum odit doloremque doloribus est nam atque perspiciatis vel blanditiis eveniet repellat voluptatibus totam enim reprehenderit in velit sed eos facere consequuntur sit hic. Sapiente magnam praesentium porro nostrum earum quo repellendus id perferendis odit consequuntur, placeat ducimus impedit illum totam adipisci corporis ipsa. Placeat itaque corrupti omnis autem minus voluptatem, quaerat soluta rem mollitia eos beatae! Nemo exercitationem excepturi impedit explicabo debitis commodi, ex dolorum tenetur quam dolores. Voluptates quia debitis, voluptatibus hic consequatur ex mollitia quasi minus, recusandae impedit, laudantium iusto ipsum ea voluptatem expedita excepturi adipisci sequi doloribus laboriosam vitae. Eaque libero unde dignissimos magnam consequatur reprehenderit nostrum ratione facere harum repellat. Nulla labore, sint, repudiandae reiciendis, ullam quam autem voluptatibus architecto velit reprehenderit culpa magnam doloribus. Nostrum deserunt doloremque maxime animi labore error architecto, qui atque ipsa? Reprehenderit odio aliquam maiores dolorem veritatis ratione dolor expedita natus libero ut, laborum incidunt, perspiciatis at fugiat! Placeat, natus aspernatur! Nihil dolores eaque, officia officiis ad quo asperiores esse porro nostrum iste adipisci sit autem veritatis necessitatibus modi. Officia optio maiores veritatis explicabo, commodi et veniam maxime quam nesciunt omnis repellat molestias sunt qui dignissimos laboriosam obcaecati nulla, doloribus quas sit a? Architecto, repellat cum eum veniam nostrum laborum sed nisi sint impedit voluptatibus accusantium totam delectus dolor quas et alias, cumque temporibus rerum nobis ut provident! Voluptatum optio eum rerum perspiciatis veritatis repellendus accusantium. Velit dignissimos a dolores necessitatibus eligendi veritatis mollitia, quibusdam dolorem quas reprehenderit rerum maiores doloremque, repellendus quaerat laborum soluta ex repellat. Nostrum rem qui sapiente nam perspiciatis similique nesciunt. Ab esse ad ducimus alias maxime cupiditate error nam, aperiam tenetur incidunt possimus ullam. Assumenda officiis libero est, quam cumque voluptate quos nisi sed. Error optio unde quia expedita soluta veritatis ipsum quis ipsam suscipit, ea laboriosam sint nesciunt nemo eius consectetur, ipsa ut dolorem obcaecati nobis quo quos perspiciatis harum fugit sit? Animi quo nihil saepe harum ab? Praesentium quasi numquam molestiae dolores ex asperiores accusantium dolore sunt, nesciunt non hic quas modi dolor perferendis expedita libero, vitae repellendus ullam, neque repellat. Quia expedita, error aut dolor et numquam aspernatur rem repudiandae sapiente, culpa, id non quidem nam corrupti sit! Ipsam aut assumenda dignissimos inventore ipsa recusandae quaerat error natus quis ex molestiae aperiam odit quibusdam nemo alias asperiores corrupti dolor dicta quod suscipit, nam temporibus! Officia eveniet dolores facilis placeat tenetur quod quis explicabo eaque! A, beatae ad inventore quas ea enim, fugit numquam distinctio ab nesciunt voluptatem similique. Nihil laborum repellat placeat corrupti id! Dolor veritatis adipisci praesentium error saepe aliquam, eaque sit beatae optio cupiditate nostrum sapiente, iste incidunt asperiores consequuntur amet cum illo eum doloremque, ex laboriosam! Odit ad doloribus alias, voluptatum quos ea non, at ipsa est cum dolor nisi mollitia vel placeat neque culpa? Quibusdam, ullam debitis dolorem dolor facilis sequi quos?</h1>
      </div>
    </>
  );
}

export default Home;
