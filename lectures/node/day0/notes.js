// notes.js

// JWT's
// header, payload, signature

// const newToken = jwt('header', payload, sh256())


// one-way-fx's


// deterministic fx's 
// all fx's in js are deterministic
// JS has 1st class functions meanign we treat them just like variable:

// 1) pass fx's as arguments ot other fx's
// 2) fx's can be stored as values 
// 3) they give us a predictable output given a similar message (input)

// react components => pure functions but they also exhibit charecteristics of 1st class functions
// it must NOT try to interact or agument its inputs (props) => you can never trust or should never count on props as a means to set state or create new data

const someFx = () => {

}


// a singular file should export a singular component