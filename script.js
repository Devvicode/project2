document.addEventListener('DOMContentLoaded', function() {
  const patientForm = document.querySelector('#patient-form');
  const pharmacistForm = document.querySelector('#pharmacist-form');
  const providerForm = document.querySelector('#provider-form');
  const insuranceForm = document.querySelector('#insurance-form');
  const researchForm = document.querySelector('#research-form');

  if (patientForm) {
    patientForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const personalDetails = document.querySelector('#personal-details').value;
      const medicalDetails = document.querySelector('#medical-details').value;
      const treatmentProvider = document.querySelector('#treatment-provider').value;
      console.log('Patient Details:', { personalDetails, medicalDetails, treatmentProvider });
      alert('Smart contract initiated!');
    });
  }

  if (pharmacistForm) {
    pharmacistForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const dispenseMedication = document.querySelector('#dispense-medication').value;
      console.log('Pharmacist Details:', { dispenseMedication });
      alert('Medication dispensed!');
    });
  }

  if (providerForm) {
    providerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const providerDetails = document.querySelector('#provider-details').value;
      console.log('Provider Details:', { providerDetails });
      alert('Provider details submitted!');
    });
  }

  if (insuranceForm) {
    insuranceForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const insuranceDetails = document.querySelector('#insurance-details').value;
      console.log('Insurance Details:', { insuranceDetails });
      alert('Insurance details submitted!');
    });
  }

  if (researchForm) {
    researchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const researchDetails = document.querySelector('#research-details').value;
      console.log('Research Details:', { researchDetails });
      alert('Research details submitted!');
    });
  }
});

