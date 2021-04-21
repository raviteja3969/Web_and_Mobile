package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    final String API_URL="https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-04-01&end=2021-04-15";
    ChartView chartView;
    ArrayList<Candle> candles= new ArrayList<>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        chartView=(ChartView)findViewById(R.id.chart_view);
        getHIstory(API_URL);
    }
    public void getHIstory(String historyURL){
        class HistoryRunner implements Runnable {
            String url;
            HistoryRunner(String url){
                this.url=url;

            }

            @Override
            public void run() {
                JSONArray arr= JSONParser.getJSONOArrayFromURL(API_URL);
                //Log.d("JSONArray",arr.toString());
                JSONArray candleArr=null;
                for (int i=0; i<arr.length(); i++){
                    try {
                        candleArr=(JSONArray)arr.get(i);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    if (candleArr!=null){
                        Log.d("TAG",candleArr.toString());
                    }
                }

            }
        }

        new Thread(new HistoryRunner(historyURL)).start();


    }

}