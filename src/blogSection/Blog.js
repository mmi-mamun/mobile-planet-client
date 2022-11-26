import React from 'react';
import Post from './Post';


const Blog = () => {

    const blogPosts = [
        {
            title: "What are the different ways to manage a state in a React application?",

            firstPart: `In React apps, there are at least seven ways to handle the state. URL, Web Storage, Local State, Lifted State, Derived State.`,

            secondPart: `There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state, URL state.`,

            author: "Murtaza Bagwala",
            imgUrl:
                "https://cdn.hashnode.com/res/hashnode/image/upload/v1621503743613/eGkZpP6mP.png",
        },


        {
            title: "How does prototypical inheritance work?",

            firstPart: `Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.`,

            secondPart: `Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.

            Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues. See details here [http://www.2ality.com/2011/11/javascript-classes.html].
            
            So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
            
            Below is a sample code with comments and caption to better see how it works:
            
            After going through the code, its best to read further about Prototypal Inheritance from mozilla doc. Code example below is just one of many ways of implementing Prototypal Inheritance.`,
            author: "RLyn Ben",
            imgUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png",
        },

        {
            title: "What is a unit test? Why should we write unit tests?",

            firstPart: `Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.`,

            secondPart: `Through unit testing, software developers know source code works at the atomic level. Read why unit testing is important and valuable, as well as how it can ease the debugging process. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.`,
            author: "Matt Heusser",
            imgUrl:
                "https://www.xenonstack.com/hubfs/xenonstack-unit-testing-best-practices.png",
        },

        {
            firstPart: `Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.`,

            secondPart: `Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.`,

            title: "Angular vs. Vue vs. React?",
            thirdPart: `React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. `,

            author: "Shaumik Daityari",
            imgUrl:
                "https://iotvnaw69daj.i.optimole.com/cb:n2y9~6666f/w:1450/h:740/q:mauto/f:avif/https://www.codeinwp.com/wp-content/uploads/2019/01/angular-vs-vue-vs-react.jpg",
        }
    ];

    return (
        <div className="posts-container">
            {blogPosts.map(post =>
                <Post key={post.title} post={post}></Post>
            )}
        </div>
    );
};

export default Blog;