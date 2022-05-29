package com.webapp.web;

import jakarta.servlet.ServletException;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Date;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import com.webapp.bean.models;
import com.google.gson.Gson;
import com.webapp.dao.webappDao;


public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private webappDao webappDao;
	
    public AddServlet() {
    	this.webappDao = new webappDao();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
		HashMap<Object, Object> FinalResponse = new HashMap<Object, Object>();
		try {
			
			
			SimpleDateFormat sdf1 = new SimpleDateFormat("MM-dd-yyyy");
			
			String business_code = request.getParameter("business_code");
			int cust_number = Integer.parseInt(request.getParameter("cust_number"));
			Date clear_date = Date.valueOf(request.getParameter("clear_date"));
			int buisness_year = Integer.parseInt(request.getParameter("buisness_year"));
			String doc_id = request.getParameter("doc_id");
			Date posting_date = Date.valueOf(request.getParameter("posting_date"));
			Date document_create_date = Date.valueOf(request.getParameter("document_create_date"));
			Date due_in_date = Date.valueOf(request.getParameter("due_in_date"));
			String invoice_currency = request.getParameter("invoice_currency");
			String document_type = request.getParameter("document_type");
			int posting_id = Integer.parseInt(request.getParameter("posting_id"));
			double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount"));
			Date baseline_create_date =Date.valueOf(request.getParameter("baseline_create_date"));
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
			
			models newdata = new models(business_code,cust_number,clear_date,buisness_year,doc_id,
					posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
	
			
			
			
//			webappDao.insertdata(newdata);
			FinalResponse.put("response", webappDao.insertdata(newdata));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		Gson gson = new Gson();
		String jsonresponse = gson.toJson(FinalResponse);
		response.setHeader("Access-Control-Allow-Origin", "*");
//		response.addHeader("Access-Control-Allow-Methods", "*");
		response.getWriter().append(jsonresponse);
		
	}

}
