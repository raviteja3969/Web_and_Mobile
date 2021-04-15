package com.example.vijaya.androidhardware;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class StorageActivity extends AppCompatActivity {
    EditText txt_content;
    EditText contenttoDisplay;
    String FILENAME = "MyAppStorage";
    String Content;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_storage);
        txt_content = (EditText) findViewById(R.id.id_txt_mycontent);
        contenttoDisplay = (EditText) findViewById(R.id.id_txt_display);
    }

    public void saveTofile(View v) throws IOException {

        // ICP Task4: Write the code to save the text
        Content = txt_content.getText().toString();
        FileOutputStream fout = openFileOutput(FILENAME, Context.MODE_APPEND);
        fout.write(Content.getBytes());
        fout.close();
    }

    public void retrieveFromFile(View v) throws IOException {

        // ICP Task4: Write the code to display the above saved text
        FileInputStream fis = openFileInput(FILENAME);
        InputStreamReader isr = new InputStreamReader(fis);
        BufferedReader br = new BufferedReader(isr);
        String receivestring = "";
        StringBuilder sb = new StringBuilder();
        while ((receivestring = br.readLine()) != null) {
            sb.append(receivestring);
        }
        fis.close();
        String ret = sb.toString();
        contenttoDisplay.setText(ret);
        contenttoDisplay.setVisibility(View.VISIBLE);
    }
}

