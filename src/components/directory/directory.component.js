import React, {Component} from 'react'
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'
import "./directory.styles.scss"


class Directory extends Component {

    render() {
        return (
            <div className="directory-menu">
                {
                    this.props.sections.map(
                        section => (
                            <MenuItem 
                                {...section}
                                key={section.id}
                            />
                        )
                    )
                }
                </div>
        )
    }
}

const mapStateToProps = ({directory: {sections}}) => ({
    sections
})

export default connect(mapStateToProps)(Directory)