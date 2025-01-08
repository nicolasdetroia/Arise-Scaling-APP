//
//  AriseApp.swift
//  Arise
//
//  Created by Nicolas DeTroia on 1/8/25.
//

import SwiftUI

@main
struct AriseApp: App {
    var body: some Scene {
        WindowGroup {
            HomeView()
        }
    }
}

struct HomeView: View {
    var body: some View {
        NavigationView {
            List {
                NavigationLink(destination: BudgetingTipsView()) {
                    Text("Budgeting Tips")
                }
                
                NavigationLink(destination: SpendingRecommendationsView()) {
                    Text("Spending Recommendations")
                }
                
                NavigationLink(destination: FinancialCalculatorsView()) {
                    Text("Financial Calculators")
                }
            }
            .navigationTitle("Financial Literacy")
        }
    }
}

struct BudgetingTipsView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading) {
                Text("Budgeting Tips")
                    .font(.title)
                    .padding()
                
                Text("1. Track your spending to understand where your money goes.")
                Text("2. Create a realistic budget based on your income and expenses.")
                Text("3. Save a portion of your income regularly.")
                Text("4. Avoid unnecessary debt.")
                Text("5. Plan for emergencies with an emergency fund.")
            }
            .padding()
        }
        .navigationTitle("Budgeting Tips")
    }
}

struct SpendingRecommendationsView: View {
    @State private var income: String = ""
    @State private var expenses: String = ""
    
    var body: some View {
        Form {
            Section(header: Text("Your Financial Situation")) {
                TextField("Monthly Income", text: $income)
                    .keyboardType(.decimalPad)
                TextField("Monthly Expenses", text: $expenses)
                    .keyboardType(.decimalPad)
            }
            
            Section {
                Button("Get Recommendations") {
                    // Logic for recommendations based on input
                }
            }
        }
        .navigationTitle("Spending Recommendations")
    }
}

struct FinancialCalculatorsView: View {
    var body: some View {
        List {
            NavigationLink(destination: SavingsCalculatorView()) {
                Text("Savings Calculator")
            }
            
            NavigationLink(destination: LoanCalculatorView()) {
                Text("Loan Calculator")
            }
        }
        .navigationTitle("Financial Calculators")
    }
}

struct SavingsCalculatorView: View {
    @State private var principal: String = ""
    @State private var interestRate: String = ""
    @State private var years: String = ""
    
    var body: some View {
        Form {
            Section(header: Text("Savings Details")) {
                TextField("Principal Amount", text: $principal)
                    .keyboardType(.decimalPad)
                TextField("Annual Interest Rate (%)", text: $interestRate)
                    .keyboardType(.decimalPad)
                TextField("Years", text: $years)
                    .keyboardType(.decimalPad)
            }
            
            Section {
                Button("Calculate Savings") {
                    // Calculation logic here
                }
            }
        }
        .navigationTitle("Savings Calculator")
    }
}

struct LoanCalculatorView: View {
    @State private var loanAmount: String = ""
    @State private var interestRate: String = ""
    @State private var loanTerm: String = ""
    
    var body: some View {
        Form {
            Section(header: Text("Loan Details")) {
                TextField("Loan Amount", text: $loanAmount)
                    .keyboardType(.decimalPad)
                TextField("Annual Interest Rate (%)", text: $interestRate)
                    .keyboardType(.decimalPad)
                TextField("Loan Term (Years)", text: $loanTerm)
                    .keyboardType(.decimalPad)
            }
            
            Section {
                Button("Calculate Loan Payment") {
                    // Calculation logic here
                }
            }
        }
        .navigationTitle("Loan Calculator")
    }
}
