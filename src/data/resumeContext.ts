export const chatSystemPrompt = `You are an AI assistant on Alissa Wu's portfolio website. Visitors will ask you questions about Alissa's background, skills, and experience. 

Respond in a friendly, conversational tone - like a knowledgeable assistant who knows Alissa's work well. Keep responses concise (2-3 sentences usually, up to a paragraph for complex questions). Be enthusiastic about her work when appropriate.

Important: You are NOT Alissa. You're an AI helping visitors learn about her. Use third-person when referring to her ("Alissa has experience with..." not "I have experience with...").`;

export const resumeContext = `
ALISSA WU
Software Engineer | CS + Math @ Duke University
Seeking Summer 2026 SWE Internships

Contact: alissa@duke.edu | github.com/alissawu | linkedin.com/in/alissawu

EDUCATION
Duke University - B.S. Computer Science & Mathematics (Expected May 2027)

TECHNICAL SKILLS
Languages: Python, JavaScript, TypeScript, Go, C++, Java, R, SQL
Web/Backend: React, Flask, Express, Node.js, FastAPI, Django, Vue.js
ML/AI: PyTorch, TensorFlow, LangChain, Transformers, OpenAI API, Pandas, NumPy, Scikit-learn
Databases: PostgreSQL, MongoDB, DynamoDB, Snowflake, Redis
Tools: AWS, Docker, Git, GitHub Actions, Selenium, OCR

WORK EXPERIENCE

Visa Inc. | Software Engineer Intern | May 2025 - Aug 2025 | Austin, TX
• Automated root-cause analysis for production incidents across 3000+ tickets, reducing MTTR by 85%
• Architected LangChain multi-agent pipeline with semantic search and MCP-based agent coordination
• Built intelligent ticket routing system that analyzes incident patterns for automatic team assignment
• Implemented RAG (Retrieval-Augmented Generation) system for querying historical incident data

Duke University | Undergraduate Research Assistant | Oct 2024 | Durham, NC
• Built automated Twitter scraping framework collecting 1000+ election policy tweets for political science research
• Implemented rate-limiting, proxy rotation, and Snowflake data pipelines for reliable data collection
• Designed data cleaning and preprocessing pipeline for sentiment analysis
• Created visualization dashboards for research team to analyze tweet patterns and engagement metrics

Duke Quantitative Finance | Trading Competitor | Sept 2023 - Present | Durham, NC
• Completed Point72 Investment Analysis Academy covering options trading, valuation, and market making
• Developed Python trading algorithms implementing momentum and mean reversion strategies
• Managed $1M simulated portfolio in Duke FINTECH competition, achieving 15% returns
• Built backtesting framework for evaluating trading strategies across different market conditions

Interos.ai | Data Science R&D Intern | Jun 2024 - Jul 2024 | Arlington, VA
• Developed OCR data extraction pipelines for processing supply chain documents, reduced preprocessing time by 32%
• Trained lightweight LLM for region-specific supply chain risk summaries using fine-tuning techniques
• Built MongoDB aggregation pipelines for analyzing supplier risk patterns
• Created automated reporting system for supply chain vulnerability assessments

AYR.ai | Software Engineer Intern | Sep 2022 - Aug 2023 | Remote
• Improved handwriting classification accuracy by 28% using Transformer-based OCR models
• Reduced data retrieval time by 64% with automated Selenium web scraper
• Built React dashboard for visualizing OCR processing metrics and accuracy rates
• Implemented parallel processing pipeline for batch document analysis

NJ Institute of Technology | Algorithmic Research Intern | Jul 2021 - Sep 2021 | Newark, NJ
• Designed parallel-capable C++ algorithm for graph processing with O(V+E) complexity
• Optimized algorithm performance through innovative data structures reducing memory usage by 40%
• Published research findings on efficient graph traversal techniques

PROJECTS

MarketMentor - HackTech Finalist
AI-powered financial advisor providing personalized investment predictions using DBSCAN clustering and GPT-4. 
Integrated Polygon and AlphaVantage APIs for real-time market data.
Tech: Python, GPT-4, DBSCAN, MongoDB, React

Amazon E-Commerce Simulation - Duke CS316 Database Systems
Full-stack e-commerce platform with secure authentication and optimized database queries.
Reduced query response time from 800ms to 150ms through indexing, achieved 98% accessibility score.
Tech: Python, Flask, PostgreSQL, Bootstrap, JavaScript

Reddit Sentiment Analyzer
Real-time sentiment analysis tool using PyTorch LSTM networks for live Reddit comment classification.
Improved model accuracy by 22% using bidirectional LSTM, achieved 10ms response time for live updates.
Tech: PyTorch, Flask, Reddit API, Heroku
Live Demo: quiet-sierra-95106-5ca898adfa7b.herokuapp.com

Humanizing the MTA - Cubist Hackathon
Real-time safety metrics dashboard for NYC subway system with predictive ML analytics.
Uses 5 years of historical crime data to predict safety levels at different stations.
Tech: Flask, Folium, Pandas, Autoregression

Trivia Game - NYU CS Course
Cloud-hosted JavaScript trivia app with MVC architecture and CI/CD pipeline.
Features RESTful API, automatic deployment, and full-text search capabilities.
Tech: Node.js, Express, Handlebars, REST APIs, GitHub Actions
Live Demo: trivia-game.onrender.com

Gemma Summarizer - Go Web Application
Text summarization app with Go/Gin backend integrated with Google's Gemma LLM.
Features multi-stage Docker builds, CI/CD pipeline, and persistent conversation history.
Tech: Go, Gin, Vue.js, Docker, Railway, Gemma API
Live Demo: web-production-9757.up.railway.app

Staying Healthy - AWS Game
Full-stack JavaScript runner game with AWS backend for health education.
Serverless architecture using Lambda functions and DynamoDB for score tracking.
Tech: JavaScript, AWS Lambda, DynamoDB, API Gateway

Cache Simulator - Duke CS250 Computer Architecture
Single-level cache simulator implementing LRU replacement and write-back policies.
Simulates up to 16MB cache with detailed hit/miss statistics.
Tech: C, UNIX, Bitwise Operations, Memory Management

Autocomplete CS201 - Duke CS201 Data Structures
Word-autocomplete system in Java using binary search and hash maps for efficient lookups.
Tech: Java, Data Structures and Algorithms, Object Oriented Programming, JUnit

Huffman CS201 - Duke CS201 Data Structures
Implemented efficient compression algorithm reducing file sizes by up to 60% without data loss.
Tech: Java, Data Structures and Algorithms, Object Oriented Programming, JUnit

Life Expectancy Analysis - Duke STA199 Data Science
Statistical analysis of socioeconomic factors impacting life expectancy across 150+ countries over 15 years.
Built predictive models using multiple regression and feature selection techniques.
Tech: R, Tidyverse, ggplot2, Linear Regression
Report: sta199-f23-1.github.io/project-f23-1-sec-1-3-team2/

Single-Cell RNA Sequencing - Duke BioByte
Analyzed a Peripheral Blood Mononuclear Cells (PBMC) dataset with Seurat to reveal unique gene expression profiles.
Applied PCA reduction, graph-based clustering, and differential expression analysis.
Tech: R, Seurat, 10X Genomics

Bootleg Quizlet CLI - Python Project
Coded multiple-choice and written answer prompt functions; saved $8/month for 15+ users without Quizlet Plus.
Tech: Python
`;