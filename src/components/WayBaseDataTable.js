import React, { Component } from "react";
import MaterialTable from "material-table";
import WayBaseNavTabs from './WayBaseNavTabs';

class WayBaseDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Church ID", field: "churchID" },
        { title: "Name", field: "name" },
        {
          title: "Address",
          field: "address",
          initialEditValue: "initial edit value"
        },
        { title: "Website", field: "website" },
        {
          title: "Status",
          field: "status",
          lookup: { 1: "Development", 2: "Proposed", 3: "Closed", 4: "Closing" }
        }
      ],
      data: [
        {
          churchID: "1",
          name: "Transforming Life Center",
          address: "156 Cleopatra",
          website: "https://transforminglifecenter.ca",
          status: 1
        },
        {
          churchID: "2",
          name: "Seat Of Honor Ministries",
          address: "156 Cleopatra",
          website: "https://transforminglifecenter.ca",
          status: 2
        },
        {
          churchID: "3",
          name: "Christ Embassy",
          address: "428 Rideau Street",
          website: "https://transforminglifecenter.ca",
          status: 1
        }
      ]
    };
  }

  render() {
      const editablePanel = [
        {
          tooltip: 'More Information',
          render: rowData => {
            return (
            <WayBaseNavTabs />
            )
          },
        },
      ];

      const options = {
        headerStyle: {
          backgroundColor: 'rgb(29, 193, 221)',
          color: '#FFF'
        }
      }

    return (
      <MaterialTable
        title="WayBase Churches"
        columns={this.state.columns}
        data={this.state.data}
        detailPanel={editablePanel}
        options = { options } 
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let data = this.state.data;
                  const index = data.indexOf(oldData);
                  data.splice(index, 1);
                  this.setState({ data }, () => resolve());
                }
                resolve();
              }, 1000);
            })
        }}
      />
    );
  }
}

export default WayBaseDataTable;
