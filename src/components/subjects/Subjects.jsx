import React from 'react'
import PageTitle from '../page-title/PageTitle'
import Subject from './SubjectCards'
import './subjects.css'
import { Link } from 'react-router-dom';

const Subjects = () => {
  const subjects=[
    {
      id:1,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:2,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:3,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:4,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:5,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:6,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:7,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:8,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
    {
      id:9,
      name:"Math",
      teacher:"Faculty name",
      desc:"It is description"
    },
  ]
  return (
    <div>
    <PageTitle title="Subjects" />
    <div className="subjects">
      {subjects.map((sub) => (
        <Link
          key={sub.id}
          to={`/subject/${sub.id}/details`}
          className="subject-link"
        >
          <Subject subject={sub.name} teacher={sub.teacher} />
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Subjects