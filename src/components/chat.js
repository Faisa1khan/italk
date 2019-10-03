import { useState } from "react"
import FsLightbox from "fslightbox-react"

import PropTypes from "prop-types"
import Img from "gatsby-image"
import {
  FiVideo,
  FiMessageSquare,
  FiVolume2,
  FiImage,
  FiType,
  FiBarChart2,
  FiPlusCircle,
  FiFilm,
  FiEye,
  FiSend,
  FiMic,
  FiMaximize2,
  FiXCircle,
} from "react-icons/fi"

import React from "react"
import "./chat.scss"
import userImage from "../hooks/user-image"

const Card = ({ msg, img, name }) => {
  console.log(img)
  const { user1 } = userImage()
  return (
    <div className="card">
      <div className="person-details">
        <Img
          fluid={user1.sharp.fluid}
          alt="Eduardo Eutra"
          className="person-profile"
        />
        <span>
          <h1>{name}</h1>
          <p>{msg}</p>
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

Card.propTypes = {
  msg: PropTypes.string.isRequired,
  img: PropTypes.object,
  name: PropTypes.string.isRequired,
}

Card.defaultProps = {
  name: "Eduardo Eutra",
  msg: "Hi robin, this seems like a great idea",
  img: `image`,
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
  const { image, user1 } = userImage()
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
          fluid={user1.sharp.fluid}
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
          {hidden === true ? (
            <FiPlusCircle
              color="#fb7b7b"
              size={40}
              onClick={() => this.setState({ hidden: !this.state.hidden })}
            />
          ) : (
            <FiXCircle
              color="#fb7b7b"
              size={40}
              onClick={() => this.setState({ hidden: !this.state.hidden })}
            />
          )}
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
  const { user1, user2, user3, user4, user5 } = userImage()
  return (
    <div className="chat">
      <ul className="chat-heading">
        <li>
          <FiMessageSquare color={"f87c7c"} />
          Messages
        </li>
        <li>
          <FiMaximize2 color={"#a7a7a7"} />
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
            <div className="card">
              <div className="person-details">
                <Img
                  fluid={user1.sharp.fluid}
                  alt="Eduardo Eutra"
                  className="person-profile"
                />
                <span>
                  <h1>Johan Jager</h1>
                  <p>Hi robin, this seems like a great idea</p>
                </span>
              </div>
              <div className="message-details">
                <ul>
                  <li>19 June, 2018 | 03:49pm</li>
                  <li>
                    <FiEye color={"green"} /> 20 Replies | <FiBarChart2 />{" "}
                    290/300
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="person-details">
                <Img
                  fluid={user2.sharp.fluid}
                  alt="Eduardo Eutra"
                  className="person-profile"
                />
                <span>
                  <h1>Jurien Huggins</h1>
                  <p>Thanks, how about an icecream</p>
                </span>
              </div>
              <div className="message-details">
                <ul>
                  <li>19 June, 2018 | 03:39pm</li>
                  <li>
                    <FiEye color={"green"} /> 12 Replies | <FiBarChart2 />{" "}
                    50/100
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="person-details">
                <Img
                  fluid={user3.sharp.fluid}
                  alt="Eduardo Eutra"
                  className="person-profile"
                />
                <span>
                  <h1>Oladimeji Odunsi</h1>
                  <p>Hi, how are you doing</p>
                </span>
              </div>
              <div className="message-details">
                <ul>
                  <li>18 June, 2018 | 09:40pm</li>
                  <li>
                    <FiEye color={"green"} /> 20 Replies | <FiBarChart2 /> 20/30
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="person-details">
                <Img
                  fluid={user4.sharp.fluid}
                  alt="Eduardo Eutra"
                  className="person-profile"
                />
                <span>
                  <h1>Oleg Ivanov</h1>
                  <p>Have you checked the mail</p>
                </span>
              </div>
              <div className="message-details">
                <ul>
                  <li>18 June, 2018 | 05:49pm</li>
                  <li>
                    <FiEye color={"green"} /> 17 Replies | <FiBarChart2 />{" "}
                    90/100
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="person-details">
                <Img
                  fluid={user5.sharp.fluid}
                  alt="Eduardo Eutra"
                  className="person-profile"
                />
                <span>
                  <h1>Logan Weaver</h1>
                  <p>What about lasy night?</p>
                </span>
              </div>
              <div className="message-details">
                <ul>
                  <li>17 June, 2018 | 03:19pm</li>
                  <li>
                    <FiEye color={"green"} /> 15 Replies | <FiBarChart2 /> 29/30
                  </li>
                </ul>
              </div>
            </div>
            {/* 
            <Card name="Johan Jager" img={user1} />
            <Card msg="Thanks, how about an icecream" name="Jurien Huggins" />
            <Card msg="Hi, how are you doing" name="Oladimeji Odunsi" />

            <Card msg="Have you checked the mail?" name="Oleg Ivanov" />
            <Card msg="What in dinner?" name="Logan Weaver" /> */}
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
