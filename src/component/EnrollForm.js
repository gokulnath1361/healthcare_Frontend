
import { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

function EnrollForm() {
    const [formData, setFormData] = useState({
        hospital_name: '',
        doctor_name: '',
        treatments: '',
        feedback: '',
        address: '',
        email: '',
        contact: ''
    });

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            // Send form data to the endpoint
            const response = await fetch('http://localhost:5000/enroll/enrollment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
              throw new Error('Failed to submit data');
            }
        
        // Reset form inputs after successful submission
        setFormData({ hospital_name: '',
        doctor_name: '',
        treatments: '',
        feedback: '',
        address: '',
        email: '',
        contact: ''});

        // Handle success response (if needed)
      console.log('Data submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting data:', error.message);
    }

    };



    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Enrollment
                    </Header>
                    <Form size='large'onSubmit={handleSubmit}>
                        <Segment stacked>
                            <Form.Input type="text"
                                name="hospital_name"
                                placeholder="Hospital Name"
                                value={formData.hospital_name}
                                onChange={handleChange} 
                                 />
                            <Form.Input placeholder='Doctor Name'
                                type="text"
                                name="doctor_name"
                                value={formData.doctor_name}
                                onChange={handleChange} />
                            <Form.Input placeholder='Treatments'
                                type="text"
                                name="treatments"
                                value={formData.treatments}
                                onChange={handleChange} />
                            <Form.Input placeholder='Feedback'
                                type="text"
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange} />
                            <Form.Input placeholder='Address'
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange} />
                            <Form.Input placeholder='Email'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} />
                            <Form.Input placeholder='Contact'
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange} />



                            <Button color='teal' fluid size='large' type='submit'>
                                Submit
                            </Button>
                        </Segment>
                    </Form>

                </Grid.Column>
            </Grid>

        </div>


    )
}

export default EnrollForm
