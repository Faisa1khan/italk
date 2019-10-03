import { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  FiUsers,
  FiMusic,
  FiVideo,
  FiMessageSquare,
  FiVolume2,
  FiImage,
  FiType,
  FiChevronDown,
  FiBell,
  FiInfo,
  FiBarChart2,
  FiPlusCircle,
  FiFilm,
  FiEye,
  FiSend,
  FiMic,
} from "react-icons/fi"
import PropTypes from "prop-types"
import React from "react"
import "./chat.scss"
import userImage from "../hooks/user-image"

const Card = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "eduardo-dutra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="card">
      <div className="person-details">
        <Img
          fluid={image.sharp.fluid}
          alt="Eduardo Eutra"
          className="person-profile"
        />
        <span>
          <h1>Eduardo Eutra</h1>
          <p>Hi robin, this seems like a great idea</p>
        </span>
      </div>
      <div className="message-details">
        <ul>
          <li>19 June, 2018 | 03:49pm</li>
          <li>
            <FiEye color={"green"} /> 20 Replies | <FiBarChart2 /> 290/300
          </li>
        </ul>
      </div>
    </div>
  )
}

const ImageCollage = () => {
  console.log(userImage())
  const { message1, message2, message3, message4 } = userImage()
  const [toggler, setToggler] = useState(false)
  return (
    <div className="message-images" onClick={() => setToggler(!toggler)}>
      <Img
        fluid={message1.sharp.fluid}
        alt="Eduardo Eutra"
        className="image-1 large-images"
        onClick={() => setToggler(!toggler)}
      />
      <div>
        <Img
          fluid={message2.sharp.fluid}
          alt="Eduardo Eutra"
          className="image-2 small-images"
          onClick={() => setToggler(!toggler)}
        />
        <Img
          fluid={message3.sharp.fluid}
          alt="Eduardo Eutra"
          className="image-3 small-images"
          onClick={() => setToggler(!toggler)}
        />
        <Img
          fluid={message4.sharp.fluid}
          alt="Eduardo Eutra"
          className="image-4 small-images"
          onClick={() => setToggler(!toggler)}
        />
        <FsLightbox
          toggler={toggler}
          sources={[
            "https://images.unsplash.com/photo-1569365788898-f96aa58c27eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            "https://images.unsplash.com/photo-1569493086584-33e0b36f3145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
            "https://images.unsplash.com/photo-1569346332452-876d0eef389f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            "https://images.unsplash.com/photo-1569261230225-e0d58c2342c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
          ]}
        />
      </div>
    </div>
  )
}

const Messages = () => {
  const { image } = userImage()
  return (
    <div className="messages-container">
      <article className="user-reply">
        <p>Hi there, how are you? have watched the news?</p>
        <Img
          fluid={image.sharp.fluid}
          alt="Eduardo Eutra"
          className="messgae-profile"
        />
      </article>
      <article className="other-user-reply">
        <p> hi robin, this seems like a great idea</p>
        <ImageCollage />
        <Img
          fluid={image.sharp.fluid}
          alt="Eduardo Eutra"
          className="messgae-profile"
        />
      </article>
    </div>
  )
}

class Conversation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  render() {
    const { hidden } = this.state
    return (
      <>
        <div className="messages">
          <h1 className="center-text">Today</h1>
          <Messages />
        </div>
        <div className="message-input">
          {hidden === true && (
            <div className="hidden">
              <header>
                <ul>
                  <li>
                    <FiVolume2 />
                    Audio
                  </li>
                  <li>
                    <FiVideo />
                    Vedio
                  </li>
                  <li>
                    <FiType />
                    Text
                  </li>
                  <li>
                    <FiImage />
                    Image
                  </li>
                  <li>
                    <FiMic />
                    TTS
                  </li>
                  <li>
                    <FiFilm />
                    Audio & Text
                  </li>
                </ul>
              </header>
            </div>
          )}
          <FiPlusCircle
            color="#fb7b7b"
            size={40}
            onClick={() => this.setState({ hidden: !this.state.hidden })}
          />
          <input />
          <button>
            <FiSend />
            Send
          </button>
        </div>
      </>
    )
  }
}

const Chat = () => {
  return (
    <div className="chat">
      <ul className="chat-heading">
        <li>
          <FiMessageSquare />
          Messages
        </li>
        <li>
          <FiVideo />
        </li>
      </ul>
      <section className="chat-items">
        <article className="chat-contacts">
          <header>
            <ul>
              <li>Chats</li>
              <li className="small-text">29/30</li>
            </ul>
          </header>
          <div className="all-messages">
            <Card className="recent-message" />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </article>

        <article className="chat-messages">
          <header>
            <ul>
              <li>
                <FiEye />
                Replies
              </li>
              <li>
                <FiBarChart2 />
                Report
              </li>
            </ul>
          </header>
          <div className="conversation">
            <Conversation />
          </div>
        </article>
      </section>
    </div>
  )
}

export default Chat
