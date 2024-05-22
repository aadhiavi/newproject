import React from 'react'

const Study = () => {

    const study = [
        {
            duration: 'SSC: March-2012,',
            institution: 'Z.P High Scool,',
            grade: 'Grade/Per. : 8.2 CGPA,',
            place: "Satyalapadu, Krishna, Andhrapradesh,",
            overview: "I completed my high school study in Z.P high school in Satyalapadu."
        },
        {
            duration: 'Intermediate : June-2012 - March-2014,',
            institution: 'Vishista Junior College,',
            grade: 'Grade/Per. : 83.10%,',
            place: "Thotamula, Krishna, Andhrapradesh,",
            overview: "I completed my Inter education in the stream of Bi.P.C in Vishista junior college."
        },
        {
            duration: 'Graduation: June-2014 - March-2017,',
            institution: 'Batchelor of Science in Krishna University,',
            grade: 'Grade/Per. : 66.97%,',
            place: "Tiruvuru, Krishna, Andhrapradesh,",
            overview: "I completed my Batchelor Degree in the stream of Bt.B.C in Prathibha degree college."
        }
    ];
    return (
        <>
            <div className="cart">
                {study.map((item, index) => (
                    <div key={index} className="room">
                        <h2>{item.duration}</h2>
                        <p>{item.institution}</p>
                        <span><h3>{item.grade}</h3></span>
                        <p>{item.place}</p>
                        <p>{item.overview}</p>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Study