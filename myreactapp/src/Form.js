import { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';

const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
    { code: "+7", name: "Russia" },
    { code: "+380", name: "Ukraine" },
    { code: "+49", name: "Germany" },
    { code: "+33", name: "France" },
    { code: "+81", name: "Japan" },
    { code: "+86", name: "China" },
    { code: "+1", name: "Canada" },
    { code: "+55", name: "Brazil" },
    { code: "+61", name: "Australia" },
    { code: "+27", name: "South Africa" },
    { code: "+972", name: "Israel" },
    { code: "+90", name: "Turkey" },
    { code: "+34", name: "Spain" },
    { code: "+39", name: "Italy" },
    { code: "+48", name: "Poland" },
    { code: "+31", name: "Netherlands" },
    { code: "+46", name: "Sweden" },
    { code: "+47", name: "Norway" },
    { code: "+45", name: "Denmark" },
    { code: "+358", name: "Finland" },
    { code: "+36", name: "Hungary" },
    { code: "+420", name: "Czech Republic" },
    { code: "+40", name: "Romania" },
    { code: "+41", name: "Switzerland" },
    { code: "+32", name: "Belgium" },
    { code: "+353", name: "Ireland" },
    { code: "+43", name: "Austria" },
    { code: "+30", name: "Greece" },
    { code: "+351", name: "Portugal" },
    { code: "+357", name: "Cyprus" },
    { code: "+1-246", name: "Barbados" },
    { code: "+1-876", name: "Jamaica" },
    { code: "+1-868", name: "Trinidad and Tobago" },
    { code: "+1-264", name: "Anguilla" },
    { code: "+1-268", name: "Antigua and Barbuda" },
    { code: "+1-787", name: "Puerto Rico" },
    { code: "+1-758", name: "Saint Lucia" },
    { code: "+1-784", name: "Saint Vincent and the Grenadines" },
    { code: "+1-869", name: "Saint Kitts and Nevis" },
    { code: "+1-284", name: "British Virgin Islands" },
    { code: "+1-649", name: "Turks and Caicos Islands" },
    { code: "+1-767", name: "Dominica" },
    { code: "+1-262", name: "Mauritius" },
    { code: "+1-721", name: "Sint Maarten" },
    { code: "+1-671", name: "Guam" },
    { code: "+1-441", name: "Bermuda" },
    { code: "+1-664", name: "Montserrat" },
    { code: "+1-670", name: "Northern Mariana Islands" },
    { code: "+1-684", name: "American Samoa" },
    { code: "+1-340", name: "U.S. Virgin Islands" },
    { code: "+1-646", name: "New York City" },
    { code: "+1-305", name: "Miami" },
    { code: "+1-718", name: "Brooklyn" },
    { code: "+1-212", name: "Manhattan" },
    { code: "+1-312", name: "Chicago" },
    { code: "+1-415", name: "San Francisco" },
    { code: "+1-310", name: "Los Angeles" },
    { code: "+1-626", name: "Pasadena" },
    { code: "+1-714", name: "Orange County" },
    { code: "+1-949", name: "Irvine" },
    { code: "+1-760", name: "San Diego" },
    { code: "+1-858", name: "San Diego" },
    { code: "+1-805", name: "Santa Barbara" },
    { code: "+1-562", name: "Long Beach" },
    { code: "+1-510", name: "Oakland" },
    { code: "+1-408", name: "San Jose" },
    { code: "+1-619", name: "San Diego" },
    { code: "+1-206", name: "Seattle" },
    { code: "+1-425", name: "Bellevue" },
    { code: "+1-213", name: "Los Angeles" },
    { code: "+1-323", name: "Los Angeles" },
    { code: "+1-818", name: "Los Angeles" },

];

const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        countryCode: countryCodes[0].code,
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleCountryCodeChange = (e) => {
        setFormData({ ...formData, countryCode: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName || formData.firstName.trim().length < 3) {
            newErrors.firstName = 'Имя слишком короткое или содержит недопустимые символы.';
        }
        if (!formData.lastName || formData.lastName.trim().length < 3) {
            newErrors.lastName = 'Фамилия слишком короткая или содержит недопустимые символы.';
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Неверный формат ввода';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required.';
        }
        if (!formData.password || formData.password.length < 5) {
            newErrors.password = 'Пароль слишком короткий. Используйте заглавные буквы, цифры, специальные символы';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
            // Replace this with your actual API call
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="App">
            <div className="form-container">
                <div className="registration-form">
                    <h1>User Registration</h1>
                    {submitted && <div className="success">Registration successful!</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`form-input ${errors.firstName ? 'error' : ''}`}
                                required
                            />
                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`form-input ${errors.lastName ? 'error' : ''}`}
                                required
                            />
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                required
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <div className="phone-input">
                                <select
                                    id="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleCountryCodeChange}
                                    className="country-code-select"
                                >
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name} ({country.code})
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`form-input ${errors.phone ? 'error' : ''}`}
                                    required
                                />
                            </div>
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`form-input ${errors.password ? 'error' : ''}`}
                                required
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                                required
                            />
                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                        </div>
                        <button type="submit" className="btn">Register</button>
                    </form>
                    <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
                </div>
            </div>
        </div>
    );
};

export default App;