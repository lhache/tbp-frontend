import React from 'react'
import Select from 'react-select'

const values = [
    {
        id: "535905",
        name: "Lego 42094 Technic Raupenlader, bunt"
    }, {
        id: "86541",
        name: "Ministeck 31448 - Leuchtturm, Steckplatten, ca. 9700 Steine und Zubehör"
    }
]

class Search extends React.Component {

    state = {
        value: ''
    }

    // this is when the value of the input changes
    onInputChange = (newValue, actionMeta) => {
        //  action: 'set-value' | 'input-change' | 'input-blur' | 'menu-close';
        if (actionMeta === 'input-blur') {
            debugger
        }
        if (actionMeta === 'input-change') {
            this.setState({value: newValue, inputValue: newValue})
            if (newValue !== "" && newValue.length > 2) {
                this
                    .props
                    .onChange(this.state.value)
            }
        }
    }

    render() {
        return (
            <div>
                <Select
                    value={this.state.value}
                    options={values}
                    getOptionLabel={option => option.name}
                    getOptionValue={option => option.id}
                    onInputChange={this.onInputChange}/>
            </div>
        )
    }
}

export default Search