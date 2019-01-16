import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { Table } from 'semantic-ui-react'
import '../Dashboard.css'

// IMPORT TABLE ROW
import SessionRow from './SessionRow'

class SessionTable extends Component {

  // RETURNS THE MOST RECENT 10 SESSION OBJECTS
  recent10Sessions = () => {
    let sortedSessionsArr;
    let last10Sessions;

    sortedSessionsArr = this.props.sessions.sort((a,b) => {
      let sessionA = new Date(a.date)
      let sessionB = new Date(b.date)
      return sessionB - sessionA
    })

    last10Sessions = sortedSessionsArr.slice(0, 10)
    return last10Sessions
  }

  render() {
    return (
      <div>
        <Table class='ui selectable celled table'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Hours Played</Table.HeaderCell>
              <Table.HeaderCell>Won/Loss</Table.HeaderCell>
              <Table.HeaderCell>Hourly</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.sessions ? this.recent10Sessions().map(session => {
              return (
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={1000}
                  classNames='fade'
                >
                  <SessionRow key={session.id} session={session}/>
                </CSSTransition>
              )
            }) : null
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    sessions: state.sessions
  }
}

export default connect(mapStateToProps)(SessionTable)
