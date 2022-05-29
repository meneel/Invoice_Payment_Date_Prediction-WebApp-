package com.webapp.web;

import jakarta.servlet.ServletException;
import com.google.gson.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

import com.webapp.bean.models;
import com.webapp.dao.webappDao;


@WebServlet("/GetAllServlet")
public class GetAllServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private webappDao webappDao;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetAllServlet() {
    	this.webappDao = new webappDao();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
//		PrintWriter out = response.getWriter();
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		
		try {
			Response.put("Data", webappDao.selectAll());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String jsonresponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(jsonresponse);

		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
	

}
