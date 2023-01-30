import React, { Fragment } from 'react'

const Clock = ({ timeDays, timeHours, timeMinutes, timeSeconds }) => {
    return (
        <Fragment>
            <section className='timer-container'>
                <section className='timer'>
                    <div className='clock'>
                        <section>
                            <p>{timeDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timeHours}</p>
                            <small>Hours</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timeMinutes}</p>
                            <small>Minutes</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timeSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}
Clock.defaultProps = {
    timeDays: 10,
    timeHours: 10,
    timeMinutes: 10,
    timeSeconds: 10,
}

export default Clock