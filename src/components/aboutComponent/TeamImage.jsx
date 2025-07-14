import SocialMediaIcons from "../socialmediaComponent/SocialMediaIcons";


const TeamImage = () => {

    const teamImages = [

        { id: 1, imgSrc: "images/team1.png", name: 'Member1 ' },
        { id: 2, imgSrc: "images/team2.png", name: 'Member2 ' },
        { id: 3, imgSrc: "images/team3.png", name: 'Member3 ' },
        { id: 4, imgSrc: "images/team4.png", name: 'Member4 ' },
        { id: 5, imgSrc: "images/team5.png", name: 'Member5 ' },
        { id: 6, imgSrc: "images/team6.png", name: 'Member6 ' },
        { id: 7, imgSrc: "images/team7.png", name: 'Member7 ' },
        { id: 8, imgSrc: "images/team8.png", name: 'Member8 ' },


    ]


    return (
        <div className="teamContainer">
            {teamImages.map((Member) => (
                <div key={Member.id} className="teamMember">
                    <div className="memberProfile">

                        <img src={Member.imgSrc} alt={Member.name} />
                    </div>
                    <div className="mediaLinks">
                        <SocialMediaIcons />
                    </div>
                </div>

            ))
            }
        </div>
    );
}
export default TeamImage;